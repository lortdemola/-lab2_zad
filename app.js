const _ = require('lodash');


module.exports = class app {
  constructor(items) {
    this.newtab = _.filter(items, item => _.isNumber(item));
  }
  AVG() {
    console.log( _.mean(this.newtab));
  }
  MAX() {
    console.log( _.max(this.newtab));
  }
  
  MIN() {
    console.log( _.min(this.newtab));
  }
   USER(app){
    let avg = 0;
    let avg_temp = 0;
        for(let i of app.allGrades){
          for(let x of i.grades){
            avg += x * i.weigth
            avg_temp+=i.weigth
          }
          
        }
      avg = _.round(avg/avg_temp,2)
     console.log(app.name +' '+app.surname +' '+ avg)
  }
  FIND(app){
  console.log(_.find(app.allGrades, function(o) {  if(o.weigth == 1){return o.subjectName}}))
  }
  GETmail(cols){
    const reg = /^[-\w\.]+@([-\w]+\.)+[a-z]+$/i;
    console.log(_.filter(cols, item => reg.test(item)).sort());
  }
 
}