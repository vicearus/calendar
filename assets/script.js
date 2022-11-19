//Defined useful variables
today = dayjs()
hour = today.$H
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