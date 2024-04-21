import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { inputsTypes } from '@/utils/validation/types';

export interface signupFromProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  inputs: inputsTypes[];
  pathname: string | null;
  consent: boolean;
  toggleConsent: () => void;
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
}
