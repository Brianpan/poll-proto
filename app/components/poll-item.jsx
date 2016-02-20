var React = require('react');

var VoteStore = require('../stores/vote-store');

var Actions = require('../actions');

module.exports = React.createClass({
  render: function(){

  	return <li className="list-group-item" 
               onClick={this.handleRemoveGame}>
      	{this.props.poll}
      </li>
  },
  handleRemoveGame: function(target){
    Actions.removeVote(this.props.poll);
  }	
})