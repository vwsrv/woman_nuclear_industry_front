interface NewsItem {
  slug: string;
  title: string;
  content: React.ReactNode | JSX.Element;
}

export interface NewsIdPageProps {
  newsItem: NewsItem;
}
