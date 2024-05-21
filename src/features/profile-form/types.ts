import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { inputTypesProfileForm } from '@/utils/validation/forms-options/profile-form/types';

export interface typeProfileFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  inputs: inputTypesProfileForm[];
  deleteAvatar: () => void;
  previewAvatar: string | undefined;
  setPreviewAvatar: React.Dispatch<React.SetStateAction<string | undefined>>;
  // currentUser: object;
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
}
