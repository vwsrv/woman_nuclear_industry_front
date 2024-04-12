import { HTMLAttributes, DetailedHTMLProps } from 'react';
import {
  FieldErrors,
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister
} from 'react-hook-form';

export interface typeAuthFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  email: string;
  password: string;
  onChangeEmail: (value: string) => void;
  onChangePassword: (value: string) => void;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  onSubmit: SubmitHandler<FieldValues>;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  isValid: boolean;
  registrationLinkUrl: string;
  recoveryLinkUrl: string;
  // для входа с помощью Google(Яндекс)/ВКонтакте:
  linkGoggleEntryUrl?: string;
  linkVKEntryUrl?: string;
}
