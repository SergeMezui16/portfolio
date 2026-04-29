import type { Dictionary } from 'intlayer';
import { t } from 'intlayer';

const serviceContent = {
  key: 'service',
  content: {
    title: t({ en: 'My Services', fr: 'Mes services' }),
    question: t({ en: 'How can you help me?', fr: 'Comment pouvez-vous m\'aider ?' }),
    description: t({
      en: "I'm a young student with a passion for computer science, more specifically web development. I develop solutions that solve problems for people all over the world and simplify their everyday life experience through the internet. I like movies, video games and running.",
      fr: "Je suis un jeune étudiant passionné par l'informatique et plus particulièrement par le développement web. Je développe des solutions qui permettent de résoudre des problèmes pour les gens du monde entier et de simplifier leur vie quotidienne grâce à l'internet. J'aime les films, les jeux vidéo et la course à pied.",
    }),
    services: {
      design: {
        title: t({
          en: 'Personalized website design',
          fr: 'Conception d\'un site web personnalisé',
        }),
        description: t({
          en: 'Get your own customized sites like this one to make a name for yourself on the web market.',
          fr: 'Créez vos propres sites personnalisés comme celui-ci pour vous faire un nom sur le marché du web.',
        }),
      },
      website: {
        title: t({ en: 'Web App Design', fr: 'Conception d\'applications web' }),
        description: t({
          en: 'Let us create web applications to make everyday tasks easier.',
          fr: 'Créons des applications web pour faciliter les tâches quotidiennes.',
        }),
      },
      api: {
        title: t({ en: 'REST API design', fr: 'Conception d\'API REST' }),
        description: t({
          en: 'Have your APIs designed to enable you to centralize the business logic of your projects and manage your databases.',
          fr: 'Faites concevoir vos API pour vous permettre de centraliser la logique commerciale de vos projets et de gérer vos bases de données.',
        }),
      },
      site: {
        title: t({ en: 'Site design', fr: 'Conception de maquettes' }),
        description: t({
          en: 'Visualize the final result of your web sites or applications through simple, interactive mock-ups.',
          fr: 'Visualisez le résultat final de vos sites web ou applications grâce à des maquettes simples et interactives.',
        }),
      },
      showcase: {
        title: t({ en: 'Creation of a showcase site', fr: 'Création de site vitrine' }),
        description: t({
          en: 'Have a showcase site created to enable you to present your products, achievements, etc. to everyone.',
          fr: 'Faites créer un site vitrine qui vous permettra de présenter à tous vos produits, réalisations, etc.',
        }),
      },
      team: {
        title: t({
          en: 'Working in a project development team',
          fr: 'Travailler au sein d\'une équipe de développement de projets',
        }),
        description: t({
          en: 'Invite me to a web development project.',
          fr: 'Invitez-moi à participer à un projet de développement web.',
        }),
      },
    },
  },
} satisfies Dictionary;

export default serviceContent;
