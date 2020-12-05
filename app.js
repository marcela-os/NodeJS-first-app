//const os = require('os');
//console.log(os);
//console.log('Platform: ', os.platform());
//console.log('Arch: ', os.arch());
//console.log('UserInfo ', os.userInfo());

const fs = require('fs');
//const {gender, maleNames, femaleNames, lastNames} = require('./people');

const gender = ['M', 'F']
const femaleNames = ['Vivienne', 'Valentina', 'Vanessa']
const maleNames = ['Vincent', 'Victor', 'Vanni']
const lastName = ['van Gogh', 'Cézanne', 'Signac']

const randChoice = arr => {
  return Math.floor(Math.random() * arr.length);
}

let people = [];

const generatePerson = () => {

  for (let i = 0; i <= 19; i++) {
    let person = {};
    person.gender = gender[randChoice(gender)];

    person.firstName = (person.gender === 'M') ? maleNames[randChoice(maleNames)] : femaleNames[randChoice(femaleNames)];
    
    person.lastName = lastName[Math.floor(Math.random() * lastName.length)];

    person.age = Math.floor(Math.random() * 80  + 10);

    person.email = person.firstName.toLowerCase() + '.' + (person.lastName.toLowerCase()).replace(" ", "") + '@gmail.com';
    
    people.push(person);
  }

  return people;
};

let data = generatePerson();

data = JSON.stringify(data);

fs.writeFile('people.json', data, (err) => {
  if (err) {
    console.log('Something went wrong');
    throw err;
  }
  console.log('File has been successfully generated! Check people.json');
});