import 'server-only';
import type { Locale } from '@/i18n.config';

const dictionaries = {
    en: () => import('@/dictionaries/en.json').then(module => module.default),
    cpf: () => import('@/dictionaries/cpf.json').then(module => module.default)
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
