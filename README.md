# abc-sticky

This is a sample app that allows you to create yellow "sticky notes" that you can drag around the screen.  When you click on it, it flips to the backside and expands to the center of the screen.  Click it again, and it will return to place. 

It utilizes your browser's LocalStorage to persist the state, and since it has no ability to remove notes, you can have a growing number of notes as reminders for your important tasks.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

## References
* Using Create-React-App for basic React + Redux + Webpack scaffolding:
  https://github.com/facebook/create-react-app/
* Support for SCSS in Create-React-App:
  https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc
* Redux DevTools: https://github.com/zalmoxisus/redux-devtools-extension
* Drag & Drop on Mozilla.org: https://developer.mozilla.org/en-US/docs/Web/Events/drag
* Vanilla To-Do list in Redux: https://redux.js.org/basics/example-todo-list
* Flip Styles: https://www.directv.com/entertainment
* Persist state to localstorage: https://github.com/elgerlambert/redux-localstorage