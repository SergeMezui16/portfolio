export const SITE_URL = 'https://sergemezui.dev';

export const RESUME_FILES = {
  en: 'en-resume.pdf',
  fr: 'fr-resume.pdf',
} as const;

export const GABON_WIKI_EN = 'https://en.wikipedia.org/wiki/Gabon';
export const GABON_WIKI_FR = 'https://fr.wikipedia.org/wiki/Gabon';

export function getResumeUrl(locale: string): string {
  const file = RESUME_FILES[locale as keyof typeof RESUME_FILES] ?? RESUME_FILES.en;
  return `/resume/${file}`;
}
