var Reflux = require('reflux');

var Actions = require('../actions');

module.exports = Reflux.createStore({
  listenables: [Actions],
  removeVote: function(vote_id){
    this.vote_id = vote_id;
    this.triggerRemoveChange();
  },
  triggerRemoveChange: function(){
  	this.trigger("remove", this.vote_id);
  }
});