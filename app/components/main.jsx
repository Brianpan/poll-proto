var React = require('react');
var Reflux = require('reflux');
var _ = require('lodash');

var Header = require('./header');
var GameList = require('./game-list');
var PollList = require('./poll-list');
var EmailBox = require('./email-box');

var Actions = require('../actions');
var AuthorizationStore = require('../stores/authorization-store');
var VoteStore = require('../stores/vote-store');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(AuthorizationStore, 'onAuth'),
    Reflux.listenTo(VoteStore, 'onRemoveVote')
  ],
  getInitialState: function(){
    return {
            games: [], 
            reset: false,
            auth: false
            }
  },
  componentWillMount: function(){
    Actions.getAuth();
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
  	      <GameList handle_poll={this.handlePoll} 
                    polled_games = {this.state.games}
                    auth = {this.state.auth} />
  	    </div>
  	    <div className="col-md-4">
          {this.renderPollList()}
  	    </div>	
  	  </div>
  	}
  },
  renderPollList: function(){
    if(this.state.auth){
      return <PollList games={this.state.games}
                reset_poll={this.handleResetPoll} />
    }else{
      return <EmailBox />
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
  },
  onAuth: function(event, auth_status){
    this.setState({auth: auth_status});
  },
  onRemoveVote: function(event, remove_vote){
    var game_list = this.state.games;

    var new_game_list = game_list.filter(function(n){
      return n != remove_vote
    });

    this.setState({games: new_game_list});
  }	
})