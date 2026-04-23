---
title: Why I Chose TanStack Start for My Portfolio
date: 2025-10-15
excerpt: After building my portfolio with Next.js, I decided to migrate to TanStack Start. Here is why.
tags: [tanstack, react, web-development]
locale: en
---

# Why I Chose TanStack Start for My Portfolio

After spending several months building my portfolio with Next.js, I decided to migrate it to TanStack Start. This wasn't a decision I took lightly — Next.js is a great framework — but there were compelling reasons to make the switch.

## The Appeal of TanStack Router

The biggest draw was TanStack Router's type-safe routing. As someone who loves TypeScript, having full type safety from route params to search parameters is a game changer. No more `useSearchParams()` returning `string | null` and having to handle every edge case.

## File-Based Routing Done Right

TanStack Start uses a file-based routing convention similar to Next.js, but with more flexibility. The `{-$locale}` optional path segment for i18n is elegant — it lets me handle `/en/`, `/fr/`, and even `/` without complex middleware.

## The Ecosystem

The TanStack ecosystem (Router, Query, Form) integrates seamlessly. If I ever need server-side data fetching or forms with validation, everything works together with consistent APIs.

## What I Learned

Migrating from one framework to another is always an exercise in understanding what was "magic" in the original. Next.js does a lot for you — image optimization, font loading, server components. Replacing these with explicit alternatives gave me a much better understanding of what was happening under the hood.

---

The migration is ongoing. Follow along as I document each step of the process.
