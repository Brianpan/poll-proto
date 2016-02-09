var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
  	return <nav className="nav navbar-default header">  
  	  <div className="container-fluid"> 

  	    <Link to="/" className="navbar-brand">
  	      投票系統
  	    </Link>
  	    <ul className="nav navbar-nav navbar-right">
  	      <li><a>Topic1</a></li>
  	    </ul>
  	  </div>
  	</nav>
  }
});