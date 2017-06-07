var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var testUtils = require("react-addons-test-utils");

var Form = require("Form");

describe("Form", () =>{
    it("exists", ()=>{
        expect(Form).toExist()
        expect(2+2).toNotBe(5)
    })
    it("should call the onSetCountdown function when a number gets submitted", ()=>{
        var spy = expect.createSpy();
        var countdownForm = testUtils.renderIntoDocument(<Form onSetCountdown={spy}/>)
        var $el = $(ReactDOM.findDOMNode(countdownForm))
        countdownForm.refs.seconds.value= 109
        testUtils.Simulate.submit($el.find("form")[0])

        expect(spy).toHaveBeenCalledWith(109)
    })
    it("should not call the onSetCountdown function when a non-number is submitted", ()=>{
        var spy = expect.createSpy();
        var countdownForm = testUtils.renderIntoDocument(<Form onSetCountdown={spy}/>)
        var $el = $(ReactDOM.findDOMNode(countdownForm))
        countdownForm.refs.seconds.value= "z4qqq"
        testUtils.Simulate.submit($el.find("form")[0])

        expect(spy).toNotHaveBeenCalled(109)
    })
})

