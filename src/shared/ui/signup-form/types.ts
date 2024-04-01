import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface signupFromProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  pathname: string | null;
  email: string;
  onChangeEmail: (value: string) => void;
  fullName: string;
  onChangeFullName: (value: string) => void;
  phone: string;
  onChangePhone: (value: string) => void;
  date: string;
  onChangeDate: (value: string) => void;
  password: string;
  onChangePassword: (value: string) => void;
  consent: boolean;
  toggleConsent: () => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
