// OBJECT DESTRUCTURING

// const person = {
//   // name: 'Marcel',
//   age: 26,
//   location: {
//     city: 'Dublin',
//     temp: 3
//   }
// };
//
// const { name: firstName = 'Anonymous', age } = person;
// // const name = person.name;
// // const age = person.age;
//
// console.log(`${firstName} is ${age}`);
//
// const { city, temp: temperature } = person.location;
//
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
//
// const { name:publisherName = 'Self-Published' } = book.publisher;
//
// console.log(publisherName);

// ARRAY DESTRUCTURING

const address = ['14 Old County Glen', 'Dublin', 'Ireland', 'D12'];

const [street, city, country, zip] = address;

console.log(`You are in ${city}, ${country}.`);

// const address = [];
//
// const [, , country = 'some country'] = address;
// console.log(`You are in ${country}.`);

const item = ['coffee (hot)', '€2.00', '€3.00', '€4.00'];

const [coffee, , medium] = item;

console.log(`A medium ${coffee} costs ${medium}.`);
