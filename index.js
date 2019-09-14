// Move the mouse across the screen as a sine wave.
var robot = require("robotjs");

var minIntervalInSeconds = 9;
var maxIntervalInSeconds = 11;
var actual = minIntervalInSeconds;
var myFunction;

function execute() {
    console.log("Actual interval: " + actual + " - Actual time: " + new Date().toISOString());
    actual = actual == minIntervalInSeconds ? maxIntervalInSeconds : minIntervalInSeconds;
    robot.mouseClick();
    clearInterval(myFunction);
    myFunction = setInterval(function(){
        execute();
    }, actual * 60 * 1000);
 }

myFunction = setInterval(function(){
    execute();
}, actual * 60 * 1000);




 


