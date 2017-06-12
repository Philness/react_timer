var React = require("react");
var Clock = require("Clock");
var Form = require("Form");
var Controls = require("Controls")

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
            if (newCount ===0){
                that.setState({countdownStatus:"stopped"})
            }
        }, 1000)
    },
    componentDidUpdate: function(oldProps, oldState){
        if(this.state.countdownStatus !== oldState.countdownStatus){
            switch(this.state.countdownStatus){
                case "started":
                    this.startTimer()
                    break;
                case "stopped":
                    this.setState({count: 0})
                case "paused":
                    clearInterval(this.timer)
                    this.timer = undefined
                    break;
            }
        }
    },
    componentWillUnmount:function(){
        if(this.timer){clearInterval(this.timer)}
        this.timer = undefined
    },
    handleStatusChange: function(newStatus){ //all this does is update state
        this.setState({countdownStatus:newStatus})  //but it does trigger component did update!
    },
    render:function(){
        var {count, countdownStatus} = this.state
        var renderControlArea = () =>{
        if (countdownStatus !== "stopped"){return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />}
        else {return <Form onSetCountdown ={this.handleSetCountdown}/>}
        }
        return(
            <div>
                <h2 className="title">Countdown Clock</h2>
                <Clock totalSeconds = {count} />
                {renderControlArea()}
            </div>
        );
    }

});

module.exports = Countdown;