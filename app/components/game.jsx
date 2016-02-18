var React = require('react');

module.exports = React.createClass({
  getInitialState: function(){
    return {voted: false}
  },
  //這裏更新state不會渲染componentDidUpdate
  //不會造成無窮迴圈
  //這裏是確認parent 已投票是否是空的，空的就代表沒有被投票
  componentWillReceiveProps: function(nextProps){
    if(nextProps.polled_games.length == 0){
      this.setState({voted: false});
    }
  },
  render: function(){
    return <li className="list-group-item" key={this.props.key}>
        <h4>桌遊-{this.props.game}</h4>
        <p>easy to play</p>
        {this.renderPollButton(this.props.game)}
    </li>	
  },
  resetButton: function(){
    if(this.props.polled_games.length == 0){
      this.setState({voted: false});
    }
  },
  renderPollButton: function(id){
    if(this.props.auth){
      return <button className="btn btn-info btn-xs" 
            onClick={this.handleClickButton}
            data-key={"game_" + id}
            disabled={this.state.voted ? "disabled" : null}>
          投票
        </button>
    }
    
  },
  //用props來把child component的東西和parent溝通
  handleClickButton: function(event){
    this.setState({voted: true});
    this.props.handle_poll(this.props.game);
  }
});