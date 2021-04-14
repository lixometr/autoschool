import useTranslate from '@/compositions/useTranslate';
import * as yup from 'yup';


yup.setLocale({
    mixed: {
        default: useTranslate().i18n.t('validations.correct'),
        required: useTranslate().i18n.t('validations.required'),
        notType:  useTranslate().i18n.t('validations.correct'),
    },
    string: {
        min: useTranslate().i18n.t('validations.minString'),
        length: useTranslate().i18n.t('validations.lengthString'),
        email: useTranslate().i18n.t('validations.validEmail'),
    },
    number: {
        min: useTranslate().i18n.t('validations.minNumber'),
        max: useTranslate().i18n.t('validations.maxNumber'),
    },
})
