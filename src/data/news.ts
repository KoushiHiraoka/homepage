export type NewsItem = {
  date: string;
  content: string;
  url?: string;
  source?: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
};

export const NEWS_DISPLAY_COUNT = 4;

export const newsItems: NewsItem[] = [
  { date: "2026.02.08", content: "ホームページを公開しました！" },
];
