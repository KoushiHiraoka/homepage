export const BASE_URL = import.meta.env.BASE_URL || "http://localhost:3000";
export const SITE = {
  website: "https://koushihiraoka.github.io/homepage/",
  name: "平岡 滉司",
  nameEn: "Koushi Hiraoka",
  author: "平岡 滉司 (Koushi Hiraoka)",
  profile: "https://koushihiraoka.github.io/homepage/",
  desc: "平岡 滉司 (Koushi Hiraoka) の個人ホームページ。九州大学 人間情報システム研究グループ 荒川研究室 博士後期課程2年 (D2)。",
  title: "平岡 滉司 (Koushi Hiraoka)",
  email: "hiraoka.koushi.031@s.kyushu-u.ac.jp",
  sameAs: ["https://github.com/KoushiHiraoka"],
  ogImage: "og.png",
  lightAndDarkMode: false,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "",
    url: "",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "ja", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Tokyo",
} as const;
