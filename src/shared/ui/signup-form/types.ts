import { DetailedHTMLProps, HTMLAttributes } from 'react';
import {
  FieldErrors,
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister
} from 'react-hook-form';

export interface signupFromProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  pathname: string | null;
  email: string;
  onChangeEmail: (value: string) => void;
  firstName: string;
  onChangeFirstName: (value: string) => void;
  lastName: string;
  onChangeLastName: (value: string) => void;
  phone: string;
  onChangePhone: (value: string) => void;
  date: string;
  onChangeDate: (value: string) => void;
  password: string;
  onChangePassword: (value: string) => void;
  consent: boolean;
  toggleConsent: () => void;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  onSubmit: SubmitHandler<FieldValues>;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}
