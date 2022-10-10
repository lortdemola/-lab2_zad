const _ = require('lodash');
const app = require('./app.js');

const user ={
  name:'imie',
  surname:'nazwisko',
  allGrades: [
    {
      subjectName:'Name1',
      grades: [5,4,3,5,2],
      weigth: 3
    },
    {
      subjectName:'Name2',
      grades: [3,3.5,2],
      weigth: 1
    },
    {
      subjectName:'Name3',
      grades: [4,3,3.5],
      weigth: 5
    }
  ]
} 
 
const collections = [
{},
15,
"hello@test.pl",
null,
['aaa', 'bbb', 5],
'admin@gmail.com',
undefined,
'a34@yahoo.com',
'321@a',
'321.pl'
];

const zad1 = new app([9,1,2,3,4,5])
console.log('\n\nsredniam tablicy :\n');
zad1.AVG();
console.log('\n\nmaximum tablicy :\n');
zad1.MAX();
console.log('\n\nminimum tablicy :\n');
zad1.MIN();
console.log('\n\nUser data :\n');
zad1.USER(user);
console.log('\n\nprzedmiot z waga 1 :\n');
zad1.FIND(user);
console.log('\n\nwypisanie emaili :\n');
zad1.GETmail(collections);

