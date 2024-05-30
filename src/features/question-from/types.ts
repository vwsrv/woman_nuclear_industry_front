import { HTMLAttributes, DetailedHTMLProps } from 'react';
import { inputTypes } from '@/utils/validation/types';

export interface qustionFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  inputs: inputTypes[];
  consent: boolean;
  toggleConsent: () => void;
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
}
