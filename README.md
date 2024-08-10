# Portfolio Website | Cynthia Pedrasa

This is a Turborepo monorepo containing a Nuxt 3 frontend and Sanity backend.

- Frontend: `https://cynthiapedrasa.com/`
- Backend: `https://cynthiapedrasa.sanity.studio/`

## What's inside?

### Frontend

- Nuxt 3
- Tailwind CSS

### Backend

- Sanity

### Packages

- TypeScript Config
- ESLint Config

## Build

To build all apps and packages, run the following command:

```
yarn build
```

## Develop

To develop all apps and packages, run the following command:

```
yarn dev
```

## Deploy

### Frontend

Commits pushed to `main` will automatically trigger a deploy in Vercel.

### Backend

To deploy the backend, run the following command:

```
cd apps/backend
sanity deploy
```
