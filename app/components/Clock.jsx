var React = require("react");

var Clock = React.createClass({
    getDefaultProps:function(){
        return{
            totalSeconds: 0
        }
    },
    propTypes:function(){
        return{
            totalSeconds: React.propTypes.Number
        }
    },
    formatSeconds:function(totalSeconds){
        let minutes = Math.floor(totalSeconds/60);
        let seconds = totalSeconds%60;
        if (seconds<10){seconds = "0"+seconds;}
        if (minutes<10){minutes = "0"+minutes;}
        return (minutes + ":" + seconds);
},
    render:function(){
        var {totalSeconds} = this.props;
        return(
            <div className="clock">
                <span className="clock-text">{this.formatSeconds(totalSeconds)}</span>
            </div>
        );
    }
})



module.exports = Clock;