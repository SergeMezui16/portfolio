import type { Dictionary } from 'intlayer';
import { t } from 'intlayer';

const contactContent = {
  key: 'contact',
  content: {
    title: t({ en: 'Contacts', fr: 'Contacts' }),
    question: t({ en: 'How can I find you?', fr: 'Comment puis-je vous trouver ?' }),
    phone: t({ en: 'Phone', fr: 'Téléphone' }),
    email: t({ en: 'Email', fr: 'Adresse email' }),
    location: t({ en: 'Location', fr: 'Localisation' }),
    country: t({ en: 'Motherland', fr: 'Origine' }),
    from: t({ en: 'From Gabon', fr: 'Gabon' }),
    resume: t({ en: 'My Resume', fr: 'Mon CV' }),
    open_resume: t({ en: 'click to open resume', fr: 'cliquez pour voir le CV' }),
  },
} satisfies Dictionary;

export default contactContent;
