import type { Dictionary } from 'intlayer';
import { t } from 'intlayer';

const homeContent = {
  key: 'home',
  content: {
    name: t({ en: 'Serge Mezui', fr: 'Serge Mezui' }),
    bio: t({
      en: 'Full Stack Developer. I am a web enthusiast who develops solutions to make your life easier and improve your experience through the web.',
      fr: 'Développeur Full Stack. Je suis un passionné du web qui développe des solutions pour vous faciliter la vie et améliorer votre expérience sur le web.',
    }),
    nickName: t({ en: 'the Freak.', fr: 'the Freak.' }),
    next: t({ en: 'See more', fr: 'Voir plus' }),
    cv: t({ en: 'My Resume', fr: 'Mon CV' }),
  },
} satisfies Dictionary;

export default homeContent;
