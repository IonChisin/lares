import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import roCommon from './locales/ro/translation.json'
import roCalculator from './locales/ro/calculator.json'
import roCatalog from './locales/ro/categories.json'

import ruCommon from './locales/ru/translation.json'
import ruCalculator from './locales/ru/calculator.json'
import ruCatalog from './locales/ru/categories.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ro: {
        common: roCommon,
        calculator: roCalculator,
        catalog: roCatalog
      },
      ru: {
        common: ruCommon,
        calculator: ruCalculator,
        catalog: ruCatalog
      }
    },
    lng: 'ru',
    fallbackLng: 'ro',
    ns: ['common', 'calculator', 'catalog'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
