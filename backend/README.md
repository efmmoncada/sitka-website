# Sitka Renovations Website CMS

A [Payload](https://github.com/payloadcms/payload) based CMS to host data and enable future content authoring in a no-code environment for the business owners.


## Development

To spin up the project locally, follow these steps:

1. First clone the repo
1. Then `cd YOUR_PROJECT_REPO && cp .env.example .env`
2. Next `yarn && yarn dev`
3. Now `open http://localhost:3000/admin` to access the admin panel

That's it! Changes made in `./src` will be reflected in your app.

## Production

To run Payload in production, you need to build and serve the Admin panel. To do so, follow these steps:

1. First invoke the `payload build` script by running `yarn build` or `npm run build` in your project root. This creates a `./build` directory with a production-ready admin bundle.
1. Then run `yarn start` or `npm run build` to run Node in production and serve Payload from the `./build` directory.
``

### Deployment
The CMS was deployed using [fly.io](https://fly.io).