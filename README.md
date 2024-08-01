![Deploy to Firebase Hosting on merge](https://github.com/hemlata-khandal/my-portfolio/actions/workflows/firebase-hosting-merge.yml/badge.svg)

# Hemlata's Portfolio

This is portfolio website created using ReactJS and MUI.

## lint-staged

Lint staged is setup in this project so that all the lint checks i.e. lint, prettier and stylelint only on staged files.

## Pre-commit hook

Husky is setup as pre-commit hook to run the lint-staged and all tests so that no one can acciendently commit faulty code.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run lint`

Run lint on all ts, tsx, js and jsx files using Airbnb linting rules.

### `npm run lint:fix`

Tries to fix linting errors where all possible.

### `npm run prettier`

Run the code formatting checks on ts, tsx, js and jsx files.

### `npm run prettier:fix`

Tried to fix formatting errors where all possible.

### `npm run stylelint`

Run the style lint on styled components on ts, tsx, js and jsx files.

### `npm run stylelint:fix`

Tried to fix all possible style linting errors.

### `npm run test`

Run all the tests using jest and react testing library.

### `npm run test:coverage`

Run all the tests using jest and react testing library and generate & display coverage.

### `npm run lint-staged`

Run all the lint checks on all the staged files

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.