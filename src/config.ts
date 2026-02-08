export const SITE = {
  website: "https://koushihiraoka.github.io/researcher-hp/",
  author: "平岡 滉司 (Koushi Hiraoka)",
  profile: "https://satnaing.dev/",
  desc: "九州大学 人間情報システム研究グループ 荒川研究室 博士後期課程1年 (D1)",
  title: "平岡 滉司 (Koushi Hiraoka)",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: false,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  // editPost: {
  //   enabled: false,
  //   // text: "Edit page",
  //   // url: "https://github.com/satnaing/astro-paper/edit/main/",
  // },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "ja", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Tokyo",
} as const;
