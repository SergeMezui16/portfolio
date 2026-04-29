import type { Dictionary } from 'intlayer';
import { t } from 'intlayer';

const skillContent = {
  key: 'skill',
  content: {
    title: t({ en: 'My Skills', fr: 'Mes Compétences' }),
    question: t({ en: 'What do you know?', fr: 'Qu\'est-ce que vous en savez faire ?' }),
    description: t({
      en: "I'm an autonomous, creative and professional developer. Passionate about backend work (database administration, API design, server administration...) I can also take on front-end tasks (web integration, ...) or model building.",
      fr: "Je suis un développeur autonome, créatif et professionnel. Passionné par le travail back-end (administration de bases de données, conception d'API, administration de serveurs...), je peux également prendre en charge des tâches front-end (intégration web, ...) ou la construction de modèles.",
    }),
    techno: t({ en: 'Technos', fr: 'Technos' }),
    skills: {
      design: {
        title: t({ en: 'Design', fr: 'Design' }),
        description: t({
          en: 'I make interactive website mock-ups to visualize how the final websites will look.',
          fr: 'Je réalise des maquettes interactives de sites web pour visualiser l\'aspect des sites finaux.',
        }),
      },
      backend: {
        title: t({ en: 'Backend', fr: 'Back-end' }),
        description: t({
          en: 'I build APIs and websites with back-end technologies and/or create databases, authentication systems and server-side applications.',
          fr: 'Je construis des API et des sites web avec des technologies back-end et/ou je crée des bases de données, des systèmes d\'authentification et des applications côté serveur.',
        }),
      },
      frontend: {
        title: t({ en: 'Frontend', fr: 'Front-end' }),
        description: t({
          en: 'I set up SPA (Single Page Application) type applications or fast, interactive applications.',
          fr: 'Je crée des applications de type SPA (Single Page Application) ou des applications rapides et interactives.',
        }),
      },
      others: {
        title: t({ en: 'Others', fr: 'Autres' }),
        description: t({
          en: 'I also know how to use tools that help me do my job better. I use technologies common to several types of project to adapt to standards.',
          fr: 'Je sais aussi utiliser des outils qui m\'aident à mieux faire mon travail. J\'utilise des technologies communes à plusieurs types de projets pour m\'adapter aux normes.',
        }),
      },
    },
  },
} satisfies Dictionary;

export default skillContent;
