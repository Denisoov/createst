import { ValidationRule } from 'vee-validate/dist/types/types'

import { 
    max as maxRules, 
    min as minRules,
    email as emailRules 
} from 'vee-validate/dist/rules'

export const max = {
    ...maxRules,
    message: 'Превышено максимальное число символов'
}

export const min: ValidationRule = {
    ...minRules,
    message: (_value, argument) =>
      `Строка должна состоять из ${argument['length']} и более символов`,
    params: ['length'],
  }

export const email: ValidationRule = {
    ...emailRules,
    validate(value: string) {
      const emailValid = emailRules.validate(value)
      const latinValid = !value.match(/[А-ЯЁа-яё]/)
  
      return emailValid && latinValid
    },
    message: 'Не коpректный email адрес',
}

export const required: ValidationRule = {
    message: 'Поле не заполнено',
    validate(value) {
        return {
            required: true,
            valid: !['', null, undefined].includes(value),
        }
    },

    computesRequired: true,
}