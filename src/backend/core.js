import firebase from 'firebase';

// const config = {
//     apiKey: 'AIzaSyDBosKGKi-BI9Z8vftAwkBRQlSDDNE8PvM',
//     authDomain: 'letters-social.firebaseapp.com'
// };


const firebaseConfig = {
    apiKey: "AIzaSyBvycewiq160mhkaA_MQ1TzIEKO_dqG0Y0",
    authDomain: "wunicorns-df883.firebaseapp.com",
    databaseURL: "https://wunicorns-df883.firebaseio.com",
    projectId: "wunicorns-df883",
    storageBucket: "wunicorns-df883.appspot.com",
    messagingSenderId: "423390634203",
    appId: "1:423390634203:web:7dc2cde08a51a37b"
  };

try {
    firebase.initializeApp(firebaseConfig);
} catch (e) {
    console.error('Error initializing firebase — check your source code');
    console.error(e);
}

export { firebase };
