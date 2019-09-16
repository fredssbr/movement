// Move the mouse across the screen as a sine wave.
var robot = require("robotjs");

var minIntervalInSeconds = 9;
var maxIntervalInSeconds = 11;
var actual = minIntervalInSeconds;
var myFunction;
var delay = 2000;

function execute() {
    console.log("Actual interval: " + actual + " - Actual time: " + new Date().toISOString());
    actual = actual == minIntervalInSeconds ? maxIntervalInSeconds : minIntervalInSeconds;
    console.log('First click: ' + new Date().toISOString());
    robot.mouseClick();
    robot.setMouseDelay(delay);
    console.log('Second click: ' + new Date().toISOString());
    robot.mouseClick();
    clearInterval(myFunction);
    myFunction = setInterval(function(){
        execute();
    }, ((actual * 60 * 1000) - delay));
 }

myFunction = setInterval(function(){
    execute();
}, actual * 60 * 1000);




 


