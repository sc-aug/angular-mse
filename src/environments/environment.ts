// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  "itunes-api-url": "https://itunes.apple.com/",
  "firebase-auth-api": "https://mse-auth-api.firebaseapp.com/",
  "firebaseConfig": {
    apiKey: "AIzaSyADdzg3zsU2uEHTf2L2D3RPEcXQzdGjJzE",
    authDomain: "mse-auth-api.firebaseapp.com",
    databaseURL: "https://mse-auth-api.firebaseio.com",
    projectId: "mse-auth-api",
    storageBucket: "mse-auth-api.appspot.com",
    messagingSenderId: "854894758777",
    timestampsInSnapshots: true
  }
};
