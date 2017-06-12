var React = require("react")

var Controls = React.createClass({
    propTypes:function(){
        return{
            countdownStatus: React.propTypes.string.isRequired,
            onStatusChange: React.propTypes.func.isRequired
        }
},
    onStatusChange:function(newStatus){
        return () =>{
            this.props.onStatusChange(newStatus)
        }
    },
    render:function(){
        var {countdownStatus} = this.props
        var renderStartStopButton = () => {
            if(countdownStatus==="started"){
                return(
                    <button className = "button secondary" onClick ={this.onStatusChange("paused")}>PAUSE!</button>
                )
            }else if(countdownStatus="paused"){
                return (
                    <button className = "button primary" onClick ={this.onStatusChange("started")}>START!</button>
                )
            } 
        }
        return(
            <div className = "controls">
                {renderStartStopButton()}
                <button className = "button hollow alert" onClick = {this.onStatusChange("stopped")}>RESET!</button>
            </div>
        )
    }
})

module.exports = Controls;