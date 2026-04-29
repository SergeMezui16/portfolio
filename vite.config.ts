import { intlayer } from 'vite-intlayer';
import { defineConfig } from 'vite';
import { devtools } from '@tanstack/devtools-vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';
import { nitro } from 'nitro/vite';
import path from 'node:path';
import fs from 'node:fs';

// Plugin that serves /images/* and /resume/* from the parent repo's public/ folder
// so both the Next.js app and the TanStack app share the same assets without duplication.
function serveSharedPublic(): import('vite').Plugin {
  const sharedDir = path.resolve(__dirname, '../public');
  const MIME: Record<string, string> = {
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.gif': 'image/gif',
    '.pdf': 'application/pdf',
  };
  return {
    name: 'serve-shared-public',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0] ?? '';
        if (url.startsWith('/images/') || url.startsWith('/resume/')) {
          const filePath = path.join(sharedDir, url);
          if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            const ext = path.extname(filePath).toLowerCase();
            res.setHeader('Content-Type', MIME[ext] ?? 'application/octet-stream');
            res.setHeader('Cache-Control', 'public, max-age=3600');
            fs.createReadStream(filePath).pipe(res);
            return;
          }
        }
        next();
      });
    },
  };
}

const config = defineConfig({
  plugins: [
    devtools(),
    nitro(),
    viteTsConfigPaths({ projects: ['./tsconfig.json'] }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
    intlayer(),
    serveSharedPublic(),
  ],
  resolve: {
    dedupe: ['react', 'react-dom', 'react/jsx-runtime'],
  },
  ssr: {
    noExternal: [
      'embla-carousel-react',
      'embla-carousel-autoplay',
      'embla-carousel',
      'usehooks-ts',
    ],
  },
});

export default config;
