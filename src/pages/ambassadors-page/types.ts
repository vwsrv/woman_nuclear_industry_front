import { StaticImageData } from 'next/image';

export interface itemType {
  id: number;
  name: string;
  description: string;
  img: StaticImageData;
  region: string;
  itemAbout: { title: string; children: React.ReactNode }[];
}

interface categoryType {
  title: string;
  description: string;
  items: itemType[];
}

export interface ambassadorsPageProps {
  pageData: categoryType[];
}
