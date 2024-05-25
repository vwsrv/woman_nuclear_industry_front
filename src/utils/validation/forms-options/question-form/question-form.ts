import { EMAIL_MESSAGE, REQUIRED_MESSAGE } from '../../error-messages';
import { inputTypes } from '../../types';

export const qustionInputs: inputTypes[] = [
  {
    name: 'name',
    type: 'text',
    label: 'Имя',
    defaultValue: '',
    options: {
      required: {
        value: true,
        message: REQUIRED_MESSAGE
      }
    }
  },
  {
    name: 'phone',
    type: 'tel',
    label: 'Телефон',
    defaultValue: '',
    options: {
      required: {
        value: true,
        message: REQUIRED_MESSAGE
      }
    }
  },
  {
    name: 'email',
    type: 'email',
    label: 'E-mail',
    defaultValue: '',
    options: {
      pattern: {
        value: /^.+@.+\..+$/,
        message: EMAIL_MESSAGE
      },
      required: {
        value: true,
        message: REQUIRED_MESSAGE
      }
    }
  },
  {
    name: 'theme',
    type: 'text',
    label: 'Тема вопроса',
    defaultValue: ''
  },
  {
    name: 'question',
    type: 'text',
    label: 'Суть вопроса',
    defaultValue: '',
    options: {
      required: {
        value: true,
        message: REQUIRED_MESSAGE
      }
    }
  }
];
