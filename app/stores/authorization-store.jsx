var Reflux = require('reflux');

//Action 用來當proxy capsule
var Actions = require('../actions');

module.exports = Reflux.createStore({
  listenables: [Actions],
  getAuth: function(){
  	this.auth = true;
  	this.triggerChange();
  },
  triggerChange: function(){
  	this.trigger('change', this.auth);
  }
});