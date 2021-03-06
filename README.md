# Reactive Native challenge

This is a simple TO DO list app made with
[React Native](https://facebook.github.io/react-native/) and
[Expo](https://expo.io/).
It uses [Firebase](https://firebase.google.com/) authentication and realtime database.

To test it using Expo client: https://expo.io/@diegor2/challenge

Android APK release: https://github.com/diegor2/challenge/releases

## Initial setup before building

### Setup Facebook app

Follow the instructions for "The Expo client app" on [this](https://docs.expo.io/versions/v32.0.0/sdk/facebook/) guide.

Create a `secrets/facebook.js` file with the following content, replacing the `<your-facebook-app-id>` string with your actual app id.

```js
export const appId = '<your-facebook-app-id>'
```

### Setup Firebase project

Follow the instruction from "Before you begin" session on
[this](https://firebase.google.com/docs/auth/web/facebook-login) firebase guide.

Create a `secrets/firebase.js` file with the following content, replacing the sample strings with your actual keys.

```js
const firebaseConfig = {
  apiKey: "<your-api-key>",
  authDomain: "<your-auth-domain>",
  databaseURL: "<your-database-url>",
  storageBucket: "<your-storage-bucket>",
  projectId: "<your-project-id>",
  messagingSenderId: "<your-sender-id>"
};
```

## To build and run the app:

This app is built on top of [expo](https://expo.io/), so you don't need the
native SDKs to build it (even though it's also possible).

You'll only need `npm` [installed](https://www.npmjs.com/get-npm) to handle de dependencies.

    npm install
    expo start
