import {
  EMAIL_MESSAGE,
  FIRSTNAME_MESSAGE,
  LASTNAME_MESSAGE,
  PHONE_MESSAGE,
  QUESTION_MESSAGE,
  REQUIRED_MESSAGE
} from '../../error-messages';

import { inputTypes } from '../../types';

export const feedbackInputs: inputTypes[] = [
  {
    name: 'lastName',
    type: 'text',
    label: 'Фамилия',
    defaultValue: '',
    options: {
      pattern: {
        value: /^[a-zA-Zа-яА-Я]{2,50}$/,
        message: LASTNAME_MESSAGE
      },
      minLength: {
        value: 2,
        message: LASTNAME_MESSAGE
      },
      maxLength: {
        value: 50,
        message: LASTNAME_MESSAGE
      },
      required: {
        value: true,
        message: REQUIRED_MESSAGE
      }
    }
  },
  {
    name: 'firstName',
    type: 'text',
    label: 'Имя',
    defaultValue: '',
    options: {
      pattern: {
        value: /^[a-zA-Zа-яА-Я]{2,50}$/,
        message: FIRSTNAME_MESSAGE
      },
      minLength: {
        value: 2,
        message: FIRSTNAME_MESSAGE
      },
      maxLength: {
        value: 50,
        message: FIRSTNAME_MESSAGE
      },
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
    handleChange: evt => {
      if (evt.target.value.length > 22) {
        return evt.target.value.slice(0, -1);
      }
      const input = evt.target.value.replace(/\D/g, '');
      let formattedInput = '';

      if (!input.startsWith('7')) {
        formattedInput = '7' + input.substring(1);
      } else {
        formattedInput = input;
      }

      formattedInput = formattedInput.replace(
        /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,
        '+$1 ($2) $3 - $4 - $5'
      );

      return formattedInput;
    },
    options: {
      pattern: {
        value: /^(?:\+7)\s?\(\d{3}\)\s?\d{3}\s?-?\s?\d{2}\s?-?\s?\d{2}$/,
        message: PHONE_MESSAGE
      },
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
    name: 'questionTheme',
    type: 'text',
    label: 'Тема вопроса',
    defaultValue: ''
  },
  {
    name: 'questionMessage',
    type: 'text',
    label: 'Суть вопроса',
    defaultValue: '',
    options: {
      required: {
        value: true,
        message: REQUIRED_MESSAGE
      },
      minLength: {
        value: 10,
        message: QUESTION_MESSAGE
      }
    }
  }
];
