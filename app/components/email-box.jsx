var React = require('react');

module.exports = React.createClass({
  getInitialState: function(){
    return {
    	      email: "",
    		  sent: false,
    		  error: false
			}
  },
  render: function(){
  	return <div className="panel panel-default email-box">
      <div className="panel-heading">
        <h4>請填入電子郵箱</h4>
      </div>
      <div className="panel-body">
        <input className={!this.state.error ? "form-control" : "form-control error"} 
               onChange={this.handleEmailInput}>
        </input>
      </div>
      <div className="panel-footer">
        {this.renderButton()}
      </div>
  	</div>
  },
  renderButton: function(){
    
  	if(this.state.sent){
      return <button className="btn btn-info btn-lg"
        		style={{width: 100 + '%'}}
        		disabled="disabled"
        		onClick={this.handleClick}>
          完成申請
        </button>

  	}else{
  	  return <button className="btn btn-info btn-lg"
        		style={{width: 100 + '%'}}
        		onClick={this.handleClick}>
          送出申請
        </button>	
  	}
    
  },
  handleClick: function(){
    if(this.testEmail()){
      alert("Success verify!!");
      this.setState({sent: true, error: false});
    }else{
      alert("Pleash enter correct mail!");
      this.setState({error: true});
    }
  },
  handleEmailInput: function(event){
    this.setState({email: event.target.value});
  },
  testEmail: function(email){
  	var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  	return re.test(this.state.email);
  }
});