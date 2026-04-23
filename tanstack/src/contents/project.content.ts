import type { Dictionary } from 'intlayer';
import { t } from 'intlayer';

const projectContent = {
  key: 'project',
  content: {
    title: t({ en: 'My Projects', fr: 'Mes Projets' }),
    question: t({ en: 'What did you already done?', fr: 'Qu\'avez-vous déjà fait ?' }),
    visit: t({ en: 'Visit', fr: 'Visiter' }),
    projects: {
      transitup: {
        name: t({ en: "Transit'Up", fr: "Transit'Up" }),
        description: t({
          en: 'Digital solution to quote and transit parcels around the world.',
          fr: 'Solution numérique pour coter et faire transiter les colis dans le monde entier.',
        }),
      },
      spacecoder: {
        name: t({ en: 'SpaceCoder', fr: 'SpaceCoder' }),
        description: t({
          en: 'Share tips and tools to better immerse yourself in digital tool.',
          fr: 'Partager des conseils et des outils pour mieux s\'imprégner de l\'outil numérique.',
        }),
      },
      servant: {
        name: t({ en: 'Servant', fr: 'Servant' }),
        description: t({
          en: 'Cameroon independent mass workers census project.',
          fr: 'Projet de recensement indépendant des servants de messe au Cameroun.',
        }),
      },
      spacecoderapi: {
        name: t({ en: 'SpaceCoder API', fr: 'SpaceCoder API' }),
        description: t({
          en: "SpaceCoder's V3 Application Programming Interface.",
          fr: 'API de SpaceCoder V3.',
        }),
      },
      akomaserver: {
        name: t({ en: 'Akoma Server', fr: 'Akoma Server' }),
        description: t({
          en: 'Software for managing corporate communication, data sharing and storage in a secure, synchronized way.',
          fr: 'Logiciel permettant de gérer la communication, le partage et le stockage de données au sein de l\'entreprise de manière sécurisée et synchronisée.',
        }),
      },
    },
  },
} satisfies Dictionary;

export default projectContent;
