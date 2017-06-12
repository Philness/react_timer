var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var testUtils = require("react-addons-test-utils");

var Controls = require("Controls")

describe("Controls", () =>{
    it("exists", () =>{
        expect(Controls).toExist()
    })
    describe("render", () =>{
        it("should render the pause button when it's started", () =>{
            var controls = testUtils.renderIntoDocument(<Controls countdownStatus = "started"/>)
            var $el = $(ReactDOM.findDOMNode(controls))
            var $pauseButton = $el.find("button:contains(PAUSE!)")
            expect($pauseButton.length).toNotBe(0)
        })
        it("should render the start button when it's started", () =>{
            var controls = testUtils.renderIntoDocument(<Controls countdownStatus = "paused"/>)
            var $el = $(ReactDOM.findDOMNode(controls))
            var $startButton = $el.find("button:contains(START!)")
            expect($startButton.length).toNotBe(0)
        })
    })
})