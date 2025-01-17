import {
  EMAIL_MESSAGE,
  LASTNAME_MESSAGE,
  FIRSTNAME_MESSAGE,
  PATRONYMIC_MESSAGE,
  PASSWORD_MESSAGE,
  PHONE_MESSAGE,
  REQUIRED_MESSAGE,
  FUTURE_DATE_MESSAGE,
  OLD_DATE_MESSAGE,
  REQUIRED_DATE_MESSAGE
} from '../../error-messages';
import { inputTypes } from '../../types';

export const signupInputs: inputTypes[] = [
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
    name: 'patronymic',
    type: 'text',
    label: 'Отчество',
    defaultValue: '',
    options: {
      pattern: {
        value: /^[a-zA-Zа-яА-Я]{2,50}$/,
        message: PATRONYMIC_MESSAGE
      },
      minLength: {
        value: 2,
        message: PATRONYMIC_MESSAGE
      },
      maxLength: {
        value: 50,
        message: PATRONYMIC_MESSAGE
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
      if (e.target.value.length > 22) {
        return e.target.value.slice(0, -1);
      }
      const input = e.target.value.replace(/\D/g, '');
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
    name: 'date',
    type: 'date',
    label: 'ДД.ММ.ГГГ',
    defaultValue: '',
    options: {
      validate: value => {
        const currentDate = new Date();
        const selectedDate = new Date(value);
        const maxDate = new Date();
        maxDate.setFullYear(currentDate.getFullYear() - 120);
        if (selectedDate > currentDate) {
          return FUTURE_DATE_MESSAGE;
        }
        if (selectedDate < maxDate) {
          return OLD_DATE_MESSAGE;
        }
        return true;
      },
      required: {
        value: true,
        message: REQUIRED_DATE_MESSAGE
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
