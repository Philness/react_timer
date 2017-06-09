var React = require("react");
var Clock = require("Clock");
var Form = require("Form");

var Countdown = React.createClass({
    getInitialState:function(){
        return{
            count:0,
            countdownStatus:"stopped"
        }
    },
    handleSetCountdown:function(seconds){
        this.setState({
            count:seconds,
            countdownStatus:"started"
    })
},
    startTimer:function(){
        var that = this;
        this.timer = setInterval(function(){
            var newCount = that.state.count - 1
            that.setState({count:(newCount>=0) ? newCount : 0})
        }, 1000)
    },
    componentDidUpdate: function(oldProps, oldState){
        if(this.state.countdownStatus !== oldState.countdownStatus){
            switch(this.state.countdownStatus){
                case "started":
                    this.startTimer()
                    break;
            }
        }
    },
    render:function(){
        var {count} = this.state
        return(
            <div>
                <Clock totalSeconds = {count} />
                <Form onSetCountdown ={this.handleSetCountdown}/>
            </div>
        );
    }

});

module.exports = Countdown;