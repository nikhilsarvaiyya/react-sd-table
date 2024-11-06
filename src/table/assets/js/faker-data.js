import { faker } from '@faker-js/faker';
export function createRandomUser() {
  return {
    id : faker.number.int({ min: 1 , max: 100}),
    firstName : faker.person.firstName(),
    lastName : faker.person.lastName(),
    salary : faker.number.int({ min: 1000 , max: 100000}),
    birthDate : faker.date.anytime(),
    country :faker.location.country(),
    age : faker.number.int({ min: 0 , max: 100}),
    progress : faker.number.int({ min: 0 , max: 100}),
    gender : faker.person.sex(),
    email : faker.internet.email(),
    role : faker.person.jobDescriptor(),
    image : faker.image.avatar(),
    phone : faker.phone.number(),
    description: faker.lorem.sentence({ min: 5, max: 10 }),
  };
}

export const users = faker.helpers.multiple(createRandomUser, {
  count: 500,
});

export const fakeDesc = faker.lorem.sentence({ min: 5, max: 300 })



//cellStyle : [
//   {
//     name : "gender",
//     style : {  background :faker.color.rgb({ prefix: '#', casing: 'lower' }) }
//   }
// ],
// rowStyle : { background : faker.color.rgb({ prefix: '#', casing: 'lower' }) }