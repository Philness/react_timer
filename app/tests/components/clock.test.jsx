var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var testUtils = require("react-addons-test-utils");

var Clock = require ("Clock");

describe("Clock", ()=> {
    it("exists", () =>{
        expect(2+2).toNotBe(22);
        expect(Clock).toExist();
    });
})

describe("Render", () =>{
    it("should render the clock", ()=>{
        var clock = testUtils.renderIntoDocument(<Clock totalSeconds = {62} />);
        var $el = $(ReactDOM.findDOMNode(clock));
        var actualText = $el.find(".clock-text").text();
        expect(actualText).toBe("01:02");

    })
})

describe("Clock.formatSeconds", () =>{
       it("should format seconds to a MM:SS string", () =>{
            var clock = testUtils.renderIntoDocument(<Clock />)
            var seconds = 615;
            var expected = '10:15';
            var actual = clock.formatSeconds(seconds);
            expect(actual).toBe(expected);
       })
       it("should format seconds to a MM:SS string even if minutes and seconds are less than 10", () =>{
            var clock = testUtils.renderIntoDocument(<Clock />)
            var seconds = 65;
            var expected = '01:05';
            var actual = clock.formatSeconds(seconds);
            expect(actual).toBe(expected);
       })
    });