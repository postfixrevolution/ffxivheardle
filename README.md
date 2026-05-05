# FFXIV Heardle
![Screenshot of the website](https://i.imgur.com/PnLgjWQ.png)

Copied from [Słuchaj.fun](https://sluchaj.fun), a clone of the famous [Heardle](https://heardle.app) - daily music game. <br />
It contains FFXIV music, played through the YouTube iFrame API.

# Tech stack
* [React](https://reactjs.org)
* [TypeScript](https://www.typescriptlang.org)
* [styled-components](https://styled-components.com)
* [YouTube iFrame API](https://developers.google.com/youtube/iframe_api_reference)

# To do
* Add Storybook
* Add tests
* Disable/bypass iFrame's Media Session API

# Building (default React stuff)

In the project directory, you can run:

### `yarn`
Installs all the required dependencies.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

Please format the code with ESLint and Prettier as well.

`npx eslint src/ --fix`

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
