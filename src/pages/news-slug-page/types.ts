interface NewsItem {
  slug: string;
  title: string;
  platform: string;
  moderators: string;
  content: React.ReactNode | JSX.Element;
}

export interface NewsSlugPageProps {
  newsItem: NewsItem;
}
