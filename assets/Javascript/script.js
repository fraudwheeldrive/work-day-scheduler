



//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
var today = (moment().format("MMMM D, YYYY"))
$("#currentDay").text(today);

//WHEN I scroll down
//THEN I am presented with time blocks for standard business hours


//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future

// change block colors based on time 
var hourSort = function(){
    var blockTime = moment().hour();

    //for loop to dertermine the time / color of blcok 

    for(var i=09; i<18; i++){
        var hourArea =$("#hour-"+i)
        if(blockTime > i){
            $(hourArea).addClass("present");
        }else if (blockTime === i){
            $(hourArea).addClass("past");
        }else {
            $(hourArea).addClass("future")
        }
     }
};
    

//WHEN I click into a time block
//THEN I can enter an event


$(".description").on("click", "p", function(){
    
});
 



//WHEN I click the save button for that time block
//THEN the text for that event is saved in local storage

//save click

$(".saveBtn").on("click", function(){

});


//WHEN I refresh the page
//THEN the saved events persist

hourSort();



