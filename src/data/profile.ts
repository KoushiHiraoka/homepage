import { education as bilingualEducation } from "./home";

// 既存の日本語データ形式を維持。学歴の編集元は home.ts です。
export const education = bilingualEducation.map(item => ({
  institution: item.institution.ja,
  degree: item.degree.ja,
  period: item.period.ja,
}));



export const researchInterests = [
  "研究テーマ1",
  "研究テーマ2",
];

export const grants: { title: string; organization: string; period: string; link?: string }[] = [
    {   title: "PARKS アントレプレナー教育学⽣海外派遣プログラム", 
        organization: "PARKS (Platform for All Regions of Kyushu & Okinawa for Startup-ecosystem)", 
        period : "2026年2月-2026年3月", 

    },
    {   title: "2025年度 福岡未踏 【Pro】採択 \n「SAW-Ring：表面弾性波センシングを活用したテクスチャ駆動リング型デバイス」", 
        organization: "福岡未踏的人材発掘・育成コンソーシアム (福岡未踏)", 
        period : "2025年7月 - 2026年2月", 
        link: "https://mitou-fukuoka.org/works/saw-ring/"
    },
    {   title: "『基盤』と『応用』の相乗効果で未来を拓く高度AI人財育成プログラム (K-BOOST) 採択", 
        organization: "科学技術振興機構 (JST)", 
        period : "2025年4月 - 現在",
        link: "https://www.kyushu-u.ac.jp/ja/faculty/program/k-boost/"
    },
    {   title: "令和6年度 ＳＣＡＴ研究奨励金 (採用辞退)", 
        organization: "一般財団法人 テレコム先端技術研究支援センター", 
        period : "2024年度" 
    },
    {   title: "2024年度 日本学生支援機構奨学金 大学院「特に優れた業績による返還免除」", 
        organization: "日本学生支援機構", 
        period : "2023年4月 - 2025年3月" 
    },
    {   title: "PolyU International Research Summer School 2024", 
        organization: "香港理工大学（PolyU）", 
        period : "2024年7月"
    },
];

export const awards: { title: string; organization: string; year: string; month: string; link?: string}[] = [
    {   title: "DICOMO ヤングリサーチャー賞", 
        organization: "マルチメディア、分散、協調とモバイル（DICOMO）シンポジウム", 
        year : "2026",
        month: "June", 
    },  
    {   title: "DICOMO ナイトテクニカルセッション優勝", 
        organization: "マルチメディア、分散、協調とモバイル（DICOMO）シンポジウム", 
        year : "2026",
        month: "June", 
    },  
    {   title: "UBI研究会 研究会貢献賞", 
        organization: "ユビキタスコンピューティングシステム (UBI) 研究会", 
        year : "2026",
        month: "June", 
        link: "https://sigubi.ipsj.or.jp/contributor/"
    },  
    {   title: "技育博Vo.1 【企業賞】株式会社 CARTA HOLDINGS賞 \n 「みんなでセット麻雀」", 
        organization: "技育プロジェクト", 
        year : "2026",
        month: "May"
    },  
    {   title: "異能vation ジェネレーションアワード \n 『あなたをコントローラーに「SAW-Ring」』", 
        organization: "2025年度 異能vation", 
        year : "2026",
        month: "February", 
        link: "https://inno-vation.jp/nominate/2025/"
    },  
    {   title: "DPSWS 最優秀デモンストレーション賞", 
        organization: "第33回 マルチメディア通信と分散処理ワークショップ (DPSWS)", 
        year: "2025", 
        month: "November" },
    {   title: "第87回 UBI研究会 学生奨励賞", 
        organization: "第87回 IPSJ ユビキタスコンピューティングシステム (UBI) 研究会", 
        year: "2025", 
        month: "September" },
    {   title: "第84回 UBI研究会 学生奨励賞", 
        organization: "第84回 IPSJ ユビキタスコンピューティングシステム (UBI) 研究会", 
        year: "2024", 
        month: "September" },
];
