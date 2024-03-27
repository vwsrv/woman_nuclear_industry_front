import { InputHTMLAttributes, DetailedHTMLProps, Dispatch } from 'react';

export interface typePaginationProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  activePage: number;
  itemsPerPage: number;
  setActivePage: Dispatch<React.SetStateAction<number>>;
  setItemsPerPage: Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}
