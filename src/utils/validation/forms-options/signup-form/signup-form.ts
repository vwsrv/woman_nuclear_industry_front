import {
  DATE_MESSAGE,
  EMAIL_MESSAGE,
  FIRSTNAME_MESSAGE,
  LASTNAME_MESSAGE,
  PASSWORD_MESSAGE,
  PHONE_MESSAGE,
  REQUIRED_MESSAGE
} from '../../error-messages';
import { inputsTypes } from '../../types';

export const signupInputs: inputsTypes[] = [
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
    name: 'firstName',
    type: 'text',
    label: 'Имя',
    defaultValue: '',
    options: {
      minLength: {
        value: 2,
        message: FIRSTNAME_MESSAGE
      },
      required: {
        value: true,
        message: REQUIRED_MESSAGE
      }
    }
  },
  {
    name: 'lastName',
    type: 'text',
    label: 'Фамилия',
    defaultValue: '',
    options: {
      minLength: {
        value: 2,
        message: LASTNAME_MESSAGE
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
    handleChange: e => {
      if (e.target.value.length === 1 && e.target.value === '8') {
        return '+7';
      }
      if (e.target.value.length === 12) {
        return e.target.value;
      }
      return e.target.value;
    },
    options: {
      pattern: {
        value: /^(?:\+7)\d{10}$/,
        message: PHONE_MESSAGE
      },
      required: {
        value: true,
        message: REQUIRED_MESSAGE
      }
    }
  },
  {
    name: 'date',
    type: 'text',
    label: 'ДД.ММ.ГГГ',
    defaultValue: '',
    // handleBlur: (e) => {
    //   if (e.target.value !== '' && e.target.value.length >= 8) {
    //     return e.target.value.slice(0, 2)
    //     + "/" + e.target.value.slice(2, 4)
    //     + "/" + e.target.value.slice(4)
    //   }
    // },
    options: {
      pattern: {
        value: /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(\d{4})$/,
        message: DATE_MESSAGE
      },
      required: {
        value: true,
        message: REQUIRED_MESSAGE
      }
    }
  },
  {
    name: 'password',
    type: 'password',
    label: 'Пароль',
    defaultValue: '',
    options: {
      pattern: {
        value: /.{8,}/,
        message: PASSWORD_MESSAGE
      },
      required: {
        value: true,
        message: REQUIRED_MESSAGE
      }
    }
  }
];
