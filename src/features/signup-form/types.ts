import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { inputTypes } from '@/utils/validation/types';

export interface signupFromProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  inputs: inputTypes[];
  pathname: string | null;
  consent: boolean;
  toggleConsent: () => void;
  isColumnist: boolean;
  toggleIsColumnist: () => void;
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
}
