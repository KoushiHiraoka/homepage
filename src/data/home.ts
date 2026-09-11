export type Locale = "ja" | "en";
export type Localized<T> = Record<Locale, T>;

// 日本語と英語をここで対にして編集します。
export const profile = {
  name: { ja: "平岡 滉司", en: "Koushi Hiraoka" },
  affiliation: {
    ja: "九州大学 人間情報システム研究グループ",
    en: "Humanophilic System Group, Kyushu University",
  },
  lab: { ja: "荒川研究室", en: "Arakawa Laboratory" },
  position: {
    ja: "博士後期課程2年 (D2)",
    en: "Second-year doctoral student (D2)",
  },
  imageAlt: {
    ja: "平岡 滉司 (Koushi Hiraoka) のプロフィール写真",
    en: "Profile photo of Koushi Hiraoka",
  },
  description: {
    ja: "平岡 滉司 (Koushi Hiraoka) の個人ホームページ。九州大学 人間情報システム研究グループ 荒川研究室 博士後期課程2年 (D2)。",
    en: "Koushi Hiraoka is a second-year doctoral student in the Humanophilic System Group, Arakawa Laboratory, Kyushu University.",
  },
} satisfies Record<string, Localized<string>>;

export const keywords = [
  "Human Activity Recognition",
  "Privacy-Aware Sensing",
  "Ubiquitous System",
  "Wearable Computing",
  "Human-Computer Interaction",
];

export interface Education {
  institution: Localized<string>;
  degree: Localized<string>;
  period: Localized<string>;
}

export const education: Education[] = [
  {
    institution: {
      ja: "九州大学 大学院システム情報科学府 情報理工学専攻",
      en: "Department of Information Science and Technology, Graduate School of Information Science and Electrical Engineering, Kyushu University",
    },
    degree: { ja: "博士後期課程 (博士)", en: "Doctoral program" },
    period: { ja: "2025年4月 - 現在", en: "April 2025 – Present" },
  },
  {
    institution: {
      ja: "九州大学 大学院システム情報科学府 情報理工学専攻",
      en: "Department of Information Science and Technology, Graduate School of Information Science and Electrical Engineering, Kyushu University",
    },
    degree: { ja: "博士前期課程 (修士)", en: "Master’s program" },
    period: { ja: "2023年4月 - 2025年3月", en: "April 2023 – March 2025" },
  },
  {
    institution: {
      ja: "愛媛大学 工学部 工学科 電気電子工学コース",
      en: "Electrical and Electronic Engineering Course, Department of Engineering, Faculty of Engineering, Ehime University",
    },
    degree: { ja: "学士", en: "Bachelor’s degree" },
    period: { ja: "2019年4月 - 2023年3月", en: "April 2019 – March 2023" },
  },
];

export interface Internship {
  company: Localized<string>;
  role: Localized<string>;
  period: Localized<string>;
  url?: string;
}

// 日英の会社名・役割・期間を同じ項目で編集。url は任意（日英共通）。
// 空の配列にするとインターン欄は表示されません。
export const internships: Internship[] = [
  {
    company: { ja: "株式会社SCIEN", en: "SCIEN" },
    role: { ja: "機械学習エンジニア", en: "Machine Learning Engineer" },
    period: { ja: "2026年6月 - 現在", en: "June 2026 – Present" },
    url: "https://scieninc.jp/",
  },
  {
    company: { ja: "株式会社JCCL", en: "JCCL" },
    role: { ja: "組み込みエンジニア", en: "Embedded Systems Engineer" },
    period: { ja: "2024年4月 - 現在", en: "April 2024 – Present" },
    url: "https://jccl.jp/",
  },
];
