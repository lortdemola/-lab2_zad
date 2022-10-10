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
  
}