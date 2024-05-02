interface itemType {
  id: number;
  name: string;
  description: string;
  img: string;
  region: string;
}

interface categoryType {
  title: string;
  description: string;
  items: itemType[];
}

export interface ambassadorsPageProps {
  pageData: categoryType[];
}
