// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//Defined useful variables
today = dayjs()
hour = today.$H
console.log(hour)
console.log(today)
console.log(today.$d)
console.log(typeof hour)
console.log($("#colors").children())
//Logs current date, day, and time onto the element with #currentDay ID
$("#currentDay").text(today.$d)

//Function for adding color depending on time of day and the presented hour block
//Hour blocks are given IDs in military time to be referenced in this function
$(function () {
  for (i = 0; i < 9; i++){
    //for loop to select hour block elements
    hourEl = $("#colors").children().eq(i)
    //ID strings are parsed to return integers
    //colors hour block green if the current hour is not greater than the ID of the hour block
    if (!(hour >= parseInt(hourEl.attr("id")))){
      hourEl.addClass("future")
    }else if ((hour == parseInt(hourEl.attr("id")))){
      hourEl.addClass("present")
    }else {
      hourEl.addClass("past")
    }
    
    }   


        //on click of save, the value of the text area is read
        console.log($(this).siblings('.description').val())
        localStorage.setItem($(this).parent().attr("id"), $(this).siblings('.description').val())
      //load any saved events
  $('#9 .description').val(localStorage.getItem('9'));
  $('#10 .description').val(localStorage.getItem('10'));
  $('#11 .description').val(localStorage.getItem('11'));
  $('#12 .description').val(localStorage.getItem('12'));
  $('#13 .description').val(localStorage.getItem('13'));
  $('#14 .description').val(localStorage.getItem('14'));
  $('#15 .description').val(localStorage.getItem('15'));
  $('#16 .description').val(localStorage.getItem('16'));
  $('#17 .description').val(localStorage.getItem('17'));

}


);
  
  
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


