import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Serge Mezui, Web Developper.',
    short_name: 'Serge Mezui, Web Developper.',
    description: 'I\'m a young student with a passion for computer science, more specifically web development. I develop solutions that solve problems for people all over the world and simplify their everyday life experience through the internet. I like movies, video games and running.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
