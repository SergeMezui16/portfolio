import type { Dictionary } from 'intlayer';
import { t } from 'intlayer';

const appContent = {
  content: {
    links: {
      home: t({
        en: 'Home',
        fr: 'Accueil',
      }),
      service: t({
        en: 'Service',
        fr: 'Service',
      }),
      blog: t({
        en: 'Blog',
        fr: 'Blog',
      }),
      skill: t({
        en: 'Skill',
        fr: 'Compétence',
      }),
      contact: t({
        en: 'Contact',
        fr: 'Contact',
      }),
      project: t({
        en: 'Project',
        fr: 'Projet',
      }),
      cv: t({
        en: 'Resume',
        fr: 'CV',
      }),
    },
    footer: {
      powered: t({
        en: 'Powered By',
        fr: 'Propulsé par',
      }),
    },
    meta: {
      title: t({
        en: 'Serge Mezui, Web Developer.',
        fr: 'Serge Mezui, Développeur Web.',
      }),
      description: t({
        en: "I'm a young student with a passion for computer science, more specifically web development. I develop solutions that solve problems for people all over the world and simplify their everyday life experience through the internet. I like movies, video games and running.",
        fr: "Je suis un jeune étudiant passionné par l'informatique et plus particulièrement par le développement web. Je développe des solutions qui permettent de résoudre des problèmes pour les gens du monde entier et de simplifier leur vie quotidienne grâce à l'internet. J'aime les films, les jeux vidéo et la course à pied.",
      }),
    },
  },
  key: 'app',
} satisfies Dictionary;

export default appContent;
