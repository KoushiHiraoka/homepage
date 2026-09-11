import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { transform } from "@astrojs/compiler";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { build } from "esbuild";

// Render the actual Astro components with fixture data, without publishing fixtures.
async function component(file) {
  const result = await build({
    entryPoints: [file],
    bundle: true,
    write: false,
    format: "esm",
    platform: "node",
    plugins: [
      {
        name: "astro-test",
        setup(builder) {
          builder.onResolve({ filter: /^astro\// }, args => ({
            path: import.meta.resolve(args.path),
            external: true,
          }));
          builder.onLoad({ filter: /\.astro$/ }, async args => ({
            contents: (
              await transform(await readFile(args.path, "utf8"), {
                filename: args.path,
                internalURL: "astro/compiler-runtime",
                resolvePath: specifier => specifier,
              })
            ).code,
            loader: "ts",
            resolveDir: path.dirname(args.path),
          }));
        },
      },
    ],
  });
  return (
    await import(
      `data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString("base64")}`
    )
  ).default;
}

test("Career renders each internship field in the chosen language and escapes markup", async () => {
  const Career = await component("src/components/home/CareerSection.astro");
  const container = await AstroContainer.create();
  const internshipItems = [
    {
      company: { ja: "テスト会社", en: "Example & Company" },
      role: { ja: "研究インターン", en: '<script>alert("xss")</script>' },
      period: { ja: "2026年4月 - 現在", en: "April 2026 – Present" },
      url: "https://example.com/",
    },
  ];
  const ja = await container.renderToString(Career, {
    props: { locale: "ja", internshipItems },
  });
  const en = await container.renderToString(Career, {
    props: { locale: "en", internshipItems },
  });
  for (const value of ["テスト会社", "研究インターン", "2026年4月 - 現在"])
    assert.ok(ja.includes(value));
  assert.ok(en.includes("Example &amp; Company"));
  assert.ok(en.includes("April 2026 – Present"));
  assert.ok(en.includes('href="https://example.com/"'));
  assert.ok(en.includes("&lt;script&gt;"));
  assert.ok(!en.includes("<script>"));
  assert.ok(!en.includes("テスト会社"));
  const empty = await container.renderToString(Career, {
    props: { locale: "en", internshipItems: [] },
  });
  assert.ok(!empty.includes("Internships"));
  assert.ok(empty.includes("Doctoral program"));
  for (const url of [
    undefined,
    "javascript:alert(1)",
    "data:text/html,test",
    "not a url",
  ]) {
    const html = await container.renderToString(Career, {
      props: {
        locale: "en",
        internshipItems: [{ ...internshipItems[0], url }],
      },
    });
    assert.ok(!html.includes("href="));
    assert.ok(html.includes("Example &amp; Company"));
  }
});

test("Author names use literal matches and cannot inject HTML", async () => {
  const Authors = await component(
    "src/components/home/PublicationAuthors.astro"
  );
  const container = await AstroContainer.create();
  const html = await container.renderToString(Authors, {
    props: {
      authors:
        "<img src=x onerror=alert(1)> Koushi Hiraoka, K. Hiraoka, Kx Hiraoka, 平岡 滉司",
    },
  });
  assert.ok(html.includes("&lt;img"));
  assert.ok(!html.includes("<img"));
  assert.equal((html.match(/<u /g) ?? []).length, 3);
  assert.ok(!html.includes(">Kx Hiraoka</u>"));
});

test("Built JP/EN pages expose the requested sections and reciprocal language URLs", async () => {
  const ja = await readFile("dist/index.html", "utf8");
  const en = await readFile("dist/en/index.html", "utf8");
  for (const [lang, html] of [
    ["ja", ja],
    ["en", en],
  ]) {
    assert.ok(html.includes(`lang="${lang}"`));
    assert.ok(html.includes('id="career"'));
    assert.ok(html.includes('id="publications"'));
    assert.ok(
      html.includes(
        'hreflang="ja" href="https://koushihiraoka.github.io/homepage/"'
      )
    );
    assert.ok(
      html.includes(
        'hreflang="en" href="https://koushihiraoka.github.io/homepage/en/"'
      )
    );
  }
  for (const text of [
    'id="products"',
    'id="about-detail"',
    "Domestic Conference",
  ]) {
    assert.ok(ja.includes(text));
    assert.ok(!en.includes(text));
  }
  assert.ok(en.includes("Journal Papers"));
  assert.ok(en.includes("International Conference"));
  const main = en.match(/<main\b[\s\S]*?<\/main>/)[0];
  const visible = main.replace(/<!--[\s\S]*?-->/g, "").replace(/<[^>]+>/g, "");
  assert.ok(
    !/[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]/u.test(visible)
  );
  const json = en.match(
    /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/
  )[1];
  const graph = JSON.parse(json)["@graph"];
  assert.equal(
    graph.find(item => item["@type"] === "ProfilePage").url,
    "https://koushihiraoka.github.io/homepage/en/"
  );
});
