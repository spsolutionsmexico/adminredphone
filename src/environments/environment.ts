// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCsVB58GbuUmkwSSv4WAlk3FOuU786IrEg",
    authDomain: "cocacola-redphone.firebaseapp.com",
    databaseURL: "https://cocacola-redphone.firebaseio.com",
    projectId: "cocacola-redphone",
    storageBucket: "cocacola-redphone.appspot.com",
    messagingSenderId: "634647561747"
  }
};