var React = require("react");
var {Link, IndexLink} = require("react-router");


var Nav = React.createClass({  //Could have been a stateless arrow function
    render:function(){
        return (
<div className="top-bar">
  <div className="top-bar-left">
      <ul className = "menu">
      <li className="menu-text">React Timer</li>
      <li><IndexLink to = "/" activeClassName="active" activeStyle={{fontWeight:"bold"}}>Timer</IndexLink></li>
      <li><Link to = "/countdown" activeClassName="active" activeStyle={{fontWeight:"bold"}}>Countdown</Link></li>
      </ul>
  </div>
  <div className="top-bar-right"> 
    <div className = "menu-text">Created by <a href ="#" target = "_blank">Phil E.</a></div>   
  </div>
</div>

        );
    }
});


module.exports = Nav;