# Reactive Native challenge

## Initial setup before running

### Setup firebase

Create a `secrets/firebase.js` file with the following content, replacing with your actual keys.

```js
const firebaseConfig = {
  apiKey: "<your-api-key>",
  authDomain: "<your-auth-domain>",
  databaseURL: "<your-database-url>",
  storageBucket: "<your-storage-bucket>",,
};
```

## To build and run the app:

This app is built on top of [expo](https://expo.io/), so you don't need the
native SDKs to build it.

    npm install
    expo start
