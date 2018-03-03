// SUBSCRIPTIONS

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

//child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//
//     console.log(expenses);
//   });

// database.ref('location/city')
// .once('value')
// .then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// })
// .catch((e) => {
//   console.log('Error fetching data', e);
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });


// SUBSCRIPTIONS WITH OFF METHOD

// on() returns the function, that can be passed in off() to finish subscription

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// });
//
// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);
//
// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);
//
// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);



// PUSH

// database.ref('expenses').push({
//   description: 'Rent',
//   note: 'January rent',
//   amount: 1000,
//   createdAt: 121212
// });

// database.ref('notes').push({
//   title: 'Course topics',
//   body: 'React, Angular'
// });


// REMOVE

// database.ref('notes/-L6buCOW4K1k93m3u2Uv').remove();

// database.ref().remove()
// .then(() => {
//   console.log('Data removed');
// })
// .catch((e) => {
//   console.log('Did not remove data');
// });


// SET

// database.ref('notes').set(notes);

// database.ref().set({
//   name: 'Marcel',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Dublin',
//     country: 'Ireland'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed', e);
// });


// UPDATE

// RIGHT WAY OF ACCESSING NESTED OBJECTS, USING '' AND /

// database.ref().update({
//   job: 'Manager',
//   'location/city': 'Cork'
// });

// WRONG WAY - THIS SETS LOCATION TO A NEW OBJECT DELETING COUNTRY
// database.ref().update({
//   job: 'Manager',
//   location: {
//     city: 'Cork'
//   }
// });
