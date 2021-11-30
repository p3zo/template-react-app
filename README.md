# Template React App

A quick jumping-off point for React projects. Uses and Webpack & Babel for bundling modules, with configuration for loading stylesheets and common assets like image & audio. Also includes configuration for eslint, as well as a custom script for one-line deployment via Github Pages.

## Usage

Requires [Yarn](https://classic.yarnpkg.com/en/docs/install).

###### Install the app

```bash
yarn install
```

###### Start a development server

```bash
yarn start
```

The page will reload if you make edits. You will also see any lint errors in the console.

###### Start a production server

```bash
yarn build && serve -s dist
```

###### Run the linter

```bash
yarn lint
```

###### Deploy to production

Push changes to the `main` branch, then run:

```bash
yarn build && ./deploy.sh
```

This will build the application on the `gh-pages` branch where Github Pages will serve from.
