var React = require("react");
var Clock = require("Clock");
var Form = require("Form");
var Controls = require("Controls");

var Timer = React.createClass({
//set initial state
    getInitialState:function(){
        return{
            count:0,
            countdownStatus:"stopped"
        }
    },
//Get the start timer function    
    startTimer:function(){
        var that = this;
        this.timer = setInterval(function(){
            var newCount = that.state.count + 1
            
            that.setState({count:(newCount>=0) ? newCount : 0})
            console.log(newCount)
        }, 1000)
    },
    //stop the clock if the component unmounts
     componentWillUnmount:function(){
        if(this.timer){clearInterval(this.timer)}
        this.timer = undefined
        },
//handle status change
    handleStatusChange: function(newStatus){ //all this does is update state
        this.setState({countdownStatus:newStatus})  //but it does trigger component did update!
    },
//update status
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
    render:function(){
        var {count,countdownStatus} = this.state
        return(
            <div>
                <h1 className = "title">Time Keeper</h1>
                <Clock totalSeconds = {count}/>
                <Controls countdownStatus= {countdownStatus} onStatusChange={this.handleStatusChange}/>
            </div>
        );
    }

});

module.exports = Timer;