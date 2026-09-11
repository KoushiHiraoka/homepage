# ホームページの編集

プロフィール・学歴・インターンは `src/data/home.ts` で編集します。
各項目の `ja` が日本語、`en` が英語です。英語プロフィールの所属表記もここで管理します。

インターンは `internships` に以下の形式で追加します。

```ts
{
  company: { ja: "会社名", en: "Company name" },
  role: { ja: "機械学習エンジニア", en: "Machine Learning Engineer" },
  period: { ja: "2026年6月 - 現在", en: "June 2026 – Present" },
  url: "https://example.com/",
}
```

`url` は日英共通で省略可能です。HTTP(S)のURLを指定すると会社名がリンクになります。
インターンが0件なら、その小見出しと一覧は表示されません。

論文の入力元は引き続き `src/data/publications.ts` です。英語版には
`journals` と `internationalConferences` を共通データから表示し、
`domesticConferences`・Awards・Grants・Productsは日本語版のみ表示します。
受賞・助成は `src/data/profile.ts`、Productsは `src/data/products.ts` で編集します。

日本語版は `/homepage/`、英語版は `/homepage/en/` です。
JP/ENリンクはJavaScriptなしでも動作します。

確認コマンド:

```sh
npm run lint
npm run astro -- check
npm run astro -- build
node --test tests/home.test.mjs
```

ビルドではGoogle Fontsの取得にネットワーク接続を使用します。
回帰テストは実際のAstro部品と生成済みHTMLを検証するため、ビルド後に実行してください。
