import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { inputTypes } from '@/utils/validation/types';

export interface typeProfileFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  inputs: inputTypes[];
  deleteAvatar: () => void;
  // currentUser: object;
  // pathname: string | null;
  // consent: boolean;
  // toggleConsent: () => void;
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
}
