# Demo EVG application

This is a demo application of a EVG, which consists of a TV schedule playing for a day, it's a minimalistic view. There's only two different routes. This repository was made with [React](https://reactjs.org) + [TypeScript](https://www.typescriptlang.org/) + [Tailwind](https://tailwindcss.com/) + [eslint](https://eslint.org/) + [HeroIcons](https://heroicons.com/) + [Date-fns](https://date-fns.org/) and [Vite](https://vitejs.dev).

## Getting started

1. The channel images are not available through the mock database.
2. The marker indicates the current time.
3. When opened, the window is automatically scrolled to the current time.
4. If pressed, the `NOW` button will scroll to the current time.
5. There's a little details page, that's been roughly done, just to use the route and add a little interaction.
6. It's possible to scale the application in the future with other routes, other features.
7. The view is responsive.
8. Initially, Redux was intalled, then the need for just one global state was identified.
9. The calendar above was designed, but then mock database has no other day than today, so it's been dismissed.

## Getting started

1. Clone the repository.

   ```bash
   git clone https://github.com/felipetonietto/norigin-media-candidate-epg
   ```

2. Access the project.

   ```bash
   cd norigin-media-candidate-epg
   ```

3. Install dependencies.

   ```bash
   npm i
   ```

4. Run the Norigin Media API-MOCK.

It's been used the given API which is [Norigin Mock-API](https://github.com/NoriginMedia/mock-api/tree/cloudberry).
It needs to be started in another terminal. When the script is used, it updates the database to the current day and it runs in port `localhost:1337`.
The script:

```bash
npm run start
```

Then, please, check `localhost:1337`.

5. Start the development server.

   ```bash
   npm run dev
   ```

- Check `localhost:3000`.
