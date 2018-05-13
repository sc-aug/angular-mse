// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  "itunes-api-url": "https://itunes.apple.com/",
  "firebase-auth-api": "https://mse-auth-api.firebaseapp.com/",
  "firebaseConfig": {
    apiKey: "AIzaSyBvVLLPD_nhjzIXCuV4k5NClCr0NHBRAk8",
    authDomain: "mse-firebase-api.firebaseapp.com",
    databaseURL: "https://mse-firebase-api.firebaseio.com",
    projectId: "mse-firebase-api",
    storageBucket: "mse-firebase-api.appspot.com",
    messagingSenderId: "934996565302",
    timestampsInSnapshots: true
  }
};


