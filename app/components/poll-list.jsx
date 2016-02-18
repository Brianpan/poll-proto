var React = require('react');

module.exports = React.createClass({
  
  render: function(){
  	return <div>
      <h4>投票排名</h4>
      {this.renderContent()}
      {this.renderResetButton()}
  	</div>
  },
  renderContent: function(){
  	return <ul className="list-group">
      {this.renderPolls()}
  	</ul>
  },
  renderPolls: function(){
  	return this.props.games.map(function(poll){
      return <li className="list-group-item" key={"poll_" + poll}>
      	{poll}
      </li>
  	});
  },
  renderResetButton: function(){
  	if(this.props.games.length > 0){
  	  return <button className="btn btn-warning" 
  	  		  onClick={this.handleResetPoll}>
  	  	重置投票
  	  </button>		  	
  	} 
  },
  handleResetPoll: function(){
  	this.props.reset_poll();
  }
});