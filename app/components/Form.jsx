var React = require("react");


var Form = React.createClass({
    
    onFormSubmit:function(e){
        e.preventDefault();
        var stringSeconds = this.refs.seconds.value;
        if (stringSeconds.match(/^[0-9]*$/)){
            this.refs.seconds.value ="";
            this.props.onSetCountdown(parseInt(stringSeconds, 10));

        }
    },
    render:function(){
        return(
            <div>
            <form ref = "form" onSubmit = {this.onFormSubmit} className = "countdown-form">
                <input type ="text" ref = "seconds" placeholder = "How many seconds do you want?"></input>
                <button className = "button expanded">Roll 'em!</button>
            </form>
            </div>

            
        );
    }

});

module.exports = Form;