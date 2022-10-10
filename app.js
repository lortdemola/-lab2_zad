const _ = require('lodash');
function sum(){
  console.log( _.mean(arguments));
}


sum(1,2,3,4,5);