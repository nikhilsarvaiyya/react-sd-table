"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRandomUser = createRandomUser;
exports.users = exports.fakeDesc = void 0;
var _faker = require("@faker-js/faker");
function createRandomUser() {
  return {
    id: _faker.faker.number.int({
      min: 1,
      max: 100
    }),
    firstName: _faker.faker.person.firstName(),
    lastName: _faker.faker.person.lastName(),
    salary: _faker.faker.number.int({
      min: 1000,
      max: 100000
    }),
    birthDate: _faker.faker.date.anytime(),
    country: _faker.faker.location.country(),
    age: _faker.faker.number.int({
      min: 0,
      max: 100
    }),
    progress: _faker.faker.number.int({
      min: 0,
      max: 100
    }),
    gender: _faker.faker.person.sex(),
    email: _faker.faker.internet.email(),
    role: _faker.faker.person.jobDescriptor(),
    image: _faker.faker.image.avatar(),
    phone: _faker.faker.phone.number(),
    description: _faker.faker.lorem.sentence({
      min: 5,
      max: 300
    })
  };
}
const users = exports.users = _faker.faker.helpers.multiple(createRandomUser, {
  count: 500
});
const fakeDesc = exports.fakeDesc = _faker.faker.lorem.sentence({
  min: 5,
  max: 300
});

//cellStyle : [
//   {
//     name : "gender",
//     style : {  background :faker.color.rgb({ prefix: '#', casing: 'lower' }) }
//   }
// ],
// rowStyle : { background : faker.color.rgb({ prefix: '#', casing: 'lower' }) }