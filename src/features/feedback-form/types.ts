import {
  BaseSyntheticEvent,
  DetailedHTMLProps,
  FormHTMLAttributes
} from 'react';
import { inputTypes } from '@/utils/validation/types';

export interface IFeedbackFormProps
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  isLoggedIn: boolean;
  inputs: inputTypes[];
  consent: boolean;
  toggleConsent: () => void;
  onSubmit: (
    evt: BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
}
