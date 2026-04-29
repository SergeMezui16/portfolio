---
title: Getting Started with Intlayer for React i18n
date: 2025-11-02
excerpt: Intlayer is a powerful i18n solution for React apps. Let me show you how to set it up and why I prefer it over alternatives.
tags: [i18n, react, intlayer]
locale: en
---

# Getting Started with Intlayer for React i18n

Internationalization (i18n) is one of those things that seems simple until it isn't. I've used `i18next`, `react-intl`, and `next-international` in the past — each has its strengths. But `intlayer` offers something different: **co-location of content with your components**.

## What is Intlayer?

Intlayer lets you define your translations as TypeScript objects right alongside (or near) your components. Instead of hunting through a flat `en.json` file with hundreds of keys, each section of your app owns its own dictionary.

```ts
// src/contents/home.content.ts
import type { Dictionary } from 'intlayer';
import { t } from 'intlayer';

const homeContent = {
  key: 'home',
  content: {
    title: t({ en: 'Hello World', fr: 'Bonjour le monde' }),
  },
} satisfies Dictionary;

export default homeContent;
```

## Using Content in Components

```tsx
import { useIntlayer } from 'react-intlayer';

export function MyComponent() {
  const t = useIntlayer('home');
  return <h1>{t.title}</h1>;
}
```

The type-safety is excellent — `t.title` is typed as an `IntlayerNode`, not just a `string`, which allows for rich content like React nodes.

## Route-Based Locale

With TanStack Router's `{-$locale}` optional segment and intlayer's `IntlayerProvider`, switching locale is as simple as navigating to `/fr/` vs `/en/`.

---

I highly recommend trying intlayer if you're building a multilingual React app with TanStack Start or Vite.
