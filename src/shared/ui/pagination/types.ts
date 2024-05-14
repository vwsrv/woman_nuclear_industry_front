import { InputHTMLAttributes, DetailedHTMLProps, Dispatch } from 'react';

export interface typePaginationProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  activePage: number;
  itemsPerPage: 8 | 18 | 30;
  setActivePage: Dispatch<React.SetStateAction<number>>;
  setItemsPerPage: Dispatch<React.SetStateAction<8 | 18 | 30>>;
  totalPages: number;
}
