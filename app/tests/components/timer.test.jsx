var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var testUtils = require("react-addons-test-utils");

var Timer = require("Timer");

describe("Timer", () =>{
    it("exists", () =>{
        expect(Timer).toExist()
    })

    it("should start when you put the status as (started)", (done) =>{
        var timer = testUtils.renderIntoDocument(<Timer />)
        expect(timer.state.count).toBe(0)
        timer.handleStatusChange("started")
        setTimeout(() =>{
            expect(timer.state.countdownStatus).toBe("started")
            expect(timer.state.count).toBe(1)
            done()
        }, 1004)
    })
        it("should pause when you put the status as (paused)", (done) =>{
        var timer = testUtils.renderIntoDocument(<Timer />)
        timer.setState({count:42})
        timer.handleStatusChange("started")
        timer.handleStatusChange("paused")
        expect(timer.state.count).toBe(42)
        setTimeout(() =>{
            expect(timer.state.countdownStatus).toBe("paused")
            expect(timer.state.count).toBe(42)
            done()
        }, 1005)
    })
        it("should clear the count when you put the status as (stopped)", (done) =>{
        var timer = testUtils.renderIntoDocument(<Timer />)
        timer.setState({count:59})
        
        timer.handleStatusChange("stopped")
        setTimeout(() =>{
            expect(timer.state.countdownStatus).toBe("stopped")
            expect(timer.state.count).toBe(59)
            done()
        }, 1006)
    })
})