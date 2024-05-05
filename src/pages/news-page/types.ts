export interface itemType {
  id: number;
  imageUrl: string;
  date: string;
  title: string;
  link: string;
}

interface categoryType {
  title: string;
  description: string;
  items: itemType[];
}

export interface newsPageProps {
  pageData: categoryType[];
}