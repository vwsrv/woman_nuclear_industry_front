import {
  DetailedHTMLProps,
  HTMLAttributes,
  Dispatch,
  SetStateAction
} from 'react';
import { inputTypesProfileForm } from '@/utils/validation/forms-options/profile-form/types';

export interface typeProfileFormPropsCopy
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  inputs: inputTypesProfileForm[];
  deleteAvatar: () => void;
  previewAvatar: string | undefined;
  setPreviewAvatar: Dispatch<SetStateAction<string | undefined>>;
  setFileUpload: Dispatch<SetStateAction<File | undefined>>;
  // changeAvatar: (e: any) => void;
  // currentUser: object;
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  // enctype?: string;
}
