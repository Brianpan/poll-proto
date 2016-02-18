var React = require('react');

var Game = require('./game');

module.exports = React.createClass({
  getInitialState: function(){
    return {games: []}
  },
  render: function(){
  	return <div className="game-list list-group">
  	  {this.renderGames()}
  	</div>
  },
  renderGames: function(){
  	var listGames = [1,2,3,4,5];
  	return listGames.map(function(game){
      return <Game game={game} 
      			   key={"game_d_"+game} 
      			   handle_poll={this.props.handle_poll}
      			   polled_games={this.props.polled_games} />
  	}.bind(this));
  }
});