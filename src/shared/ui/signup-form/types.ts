import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface signupFromProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  pathname: string | null;
  consent: boolean;
  toggleConsent: () => void;
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
}
