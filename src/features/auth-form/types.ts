import { HTMLAttributes, DetailedHTMLProps } from 'react';
import { inputTypes } from '@/utils/validation/types';

export interface typeAuthFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  inputs: inputTypes[];
  pathname: string | null;
  recoveryLinkUrl: string;
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  // для входа с помощью Яндекс/ВКонтакте:
  // linkYandexEntryUrl?: string;
  // linkVKEntryUrl?: string;
}
