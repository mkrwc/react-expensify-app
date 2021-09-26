import * as firebase from 'firebase';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref().on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref('expenses').push({
//         description: 'coffee',
//         note: '',
//         amount: '320',
//         createdAt: 872381
//     }
// );

// database.ref('expenses').push({
//     description: 'rent',
//     note: '',
//     amount: '180000',
//     createdAt: 982389
// });

// database.ref('expenses').push({
//     description: 'sandwich',
//     note: '',
//     amount: '990',
//     createdAt: 98777
// });

// const firebaseNotes = {
//     notes: {
//         fdsf: {
//             title: 'Note 1',
//             body: 'This is my note'
//         },
//         huasrfd: {
//             title: 'Note 2',
//             body: 'This is my note'
//         }
//     }
// };

// const notes = [{
//     id: '12',
//     title: 'Note 1',
//     body: 'This is my note'
// },{
//     id: 'ihjd777',
//     title: 'Note 2',
//     body: 'This is my note'
// }];

// database.ref('note').set(notes);

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const value = snapshot.val();
//     console.log(`${value.name} is a ${value.job.title} at ${value.job.company}` );
// }, (e) => {
//     console.log('Error with data fetching');
// });

// setTimeout(() => {
//     database.ref('job/company').set('Steam');
// }, 3500);

// setTimeout(() => {
//     database.ref('age').off(onValueChange);
// }, 7000);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e)
//     });

// database.ref().set({
//     name: 'Mateusz Karwacki',
//     age: 33,
//     stressLevel: 6,
//     married: false,
//     job: {title: 'Software developer', company: 'Amazon'},
//     location: {
//         city: 'Warszawa',
//         country: 'Polska'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed', e)
// });

// database.ref().update({
//     'job/company': 'Microsoft',
//     'location/city': 'Seattle',
//     'location/country': 'US',
//     stressLevel: 9

// });

// database.ref('married')
// .remove()
// .then(() => {
//     console.log('Data is removed');
// }).catch((e) => {
//     console.log('removed failed', e)
// });