var React = require("react");
var {Link, IndexLink} = require("react-router");
var Nav = require("Nav");
//Main gets passed to the "/" route in app.jsx
//the elements need a div wrapper, and you need this.props.children in order to display the Weather component

var Main = (props) => (
    <div>
        <Nav/>
        <div>       
            <p>You are on Main.jsx, Magellan!</p>    
            <div>{props.children}</div>           
        </div>
    </div>
);

module.exports = Main;