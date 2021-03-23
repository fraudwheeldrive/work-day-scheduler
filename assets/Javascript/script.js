// set up static var 

var today = moment().format("dddd, MMMM Do");
var now = moment().format ("H A");

//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar

$("#currentDay").text(today);




