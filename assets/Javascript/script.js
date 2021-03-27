// set up static var 


//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
var today = moment().format("dddd, MMMM Do");
var now = moment().format ("H:HH");
$("#currentDay").text(today);
$("#currentTime").text(now);


//WHEN I scroll down
//THEN I am presented with time blocks for standard business hours


//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future


    //THEN each time block is color-coded to indicate whether it is in the past, present, or future

var rightNow = new Date();
console.log(rightNow);
console.log(typeof rightNow);

//WHEN I click into a time block
//THEN I can enter an event

$(".description").on("click", "p", function() {
    var text =$(this)
    .text()
    .trim();
  var textInput =$("<textarea>")
    .addClass("form-control")
    .val(text);

  $(this).replaceWith(textInput);
   textInput.trigger("focus");
});

$(".description").on("blur", "textarea", function() {
    //get the textareas; current value/text
      var text = $(this)
        .val()
        .trim();
      // console.log(text)
  
      //recreate p element
      var taskP = $("<p>")
        .addClass("taskItem")
        .text(text);
  
      // replace textarea with p element
      $(this).replaceWith(taskP);
    });    
  


//WHEN I click the save button for that time block
//THEN the text for that event is saved in local storage




//WHEN I refresh the page
//THEN the saved events persist





