import type { Dictionary } from 'intlayer';
import { t } from 'intlayer';

const enterpriseContent = {
  key: 'enterprise',
  content: {
    title: t({ en: 'They trusted me', fr: 'Ils m\'ont fait confiance' }),
    question: t({ en: 'Who have you worked with?', fr: 'Avec qui avez-vous travaillé ?' }),
  },
} satisfies Dictionary;

export default enterpriseContent;
