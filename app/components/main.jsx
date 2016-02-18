var React = require('react');
// var _ = require('lodash');

var Header = require('./header');
var GameList = require('./game-list');
var PollList = require('./poll-list');

module.exports = React.createClass({
  getInitialState: function(){
    return {games: [], reset: false}
  },
  render: function(){
  	return <div>
  	  <Header/>
  	  <div className="container">
        {this.renderContent()}
      </div>
    </div>

  },
  renderContent: function(){
  	if(this.props.children){
  	  return this.props.children	
  	}else{
  	  return <div className="row"> 
  	    <div className="col-md-8">
  	      <GameList handle_poll={this.handlePoll} polled_games = {this.state.games} />
  	    </div>
  	    <div className="col-md-4">
  	      <PollList games={this.state.games}
  	      			reset_poll={this.handleResetPoll} />
  	    </div>	
  	  </div>
  	}
  },
  handlePoll: function(game_id){
  	var current_games = this.state.games;
  	current_games.push(game_id);
  	// console.log(event.target.getAttribute('data-key'));
    this.setState({games: current_games});
  },
  handleResetPoll: function(){
  	this.setState({games: []});
  }	
})