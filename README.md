# Card Challenge

This project contains a list of editable card components. All components have been built with modularity and atomicity in mind for eased testing.

NB: No server connected; Data are currently mocked and persisted / rehydrated through Redux.

## What It Uses:

- Typescript
- Flexbox & Grids
- React
- Redux
- Redux Saga
- Styled Components
- PWA
- Jest
- Enzyme
- Storybook

## Installation

The following project uses `yarn`; If you don't have (and don't want) to have it installed globally through `npm i -g yarn`, you can always run it up using an npm package runner, e.g. npx: `npx yarn ..`.\
After cloning the repo, you can boot up the project by running `npx yarn install && npx yarn start`.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn coverage`

Launches the test runner in the interactive watch mode while also showing the total testing coverage.

### `yarn storybook`

Launches storybook interface for testing isolated UI components.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn format`

Prettify entire codebase with rules defined on `.prettierrc`.

### `yarn lint`

Check and return any typescript and linting error.

### `yarn bundle`

Launch Webpack Bundle Analyzer interface to visualise the amount of space taken by each dependency.
