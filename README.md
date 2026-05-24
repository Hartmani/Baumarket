
# Baumarket MVP

Jednoduché MVP aplikace pro agregaci stavebních poptávek.

## Stack
- Next.js 14
- TypeScript
- TailwindCSS
- Supabase

## Funkce
- Landing page
- Formulář poptávky
- Kategorie:
  - Cihly
  - Okna
  - Polystyren
- Admin dashboard
- Agregace poptávek

## Spuštění

```bash
npm install
npm run dev
```

## Environment variables

Vytvoř `.env.local`

```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

## Supabase SQL

SQL schema je v souboru:
`supabase/schema.sql`
