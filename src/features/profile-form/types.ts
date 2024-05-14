import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { inputTypes } from '@/utils/validation/types';

export interface typeProfileFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  inputs: inputTypes[];
  deleteAvatar: () => void;
  previewAvatar: string | undefined;
  setPreviewAvatar: React.Dispatch<React.SetStateAction<string | undefined>>;
  // currentUser: object;
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
}
