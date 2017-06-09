var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var testUtils = require("react-addons-test-utils");

var Countdown = require("Countdown")

describe("Countdown", () =>{
    it("exists", () =>{
        expect(Countdown).toExist()
    })
})

describe("passing states with handleSetCountdown", ()=>{
    it("should set state to (started), then start counting correctly", (done)=>{
        var countdown = testUtils.renderIntoDocument(<Countdown/>)
        countdown.handleSetCountdown(10)
        expect(countdown.state.count).toBe(10)
        expect(countdown.state.countdownStatus).toBe("started")

        setTimeout(function(){
                expect(countdown.state.count).toBe(9)
                done()
            }
        ,1001)
    })
    it("shouldn't try to set a negative time value", (done)=>{
        var countdown = testUtils.renderIntoDocument(<Countdown/>)
        countdown.handleSetCountdown(1)
        expect(countdown.state.count).toBe(1)
        setTimeout(function(){
                expect(countdown.state.count).toBe(0)
                done()
            }
        ,2001)
    })
})