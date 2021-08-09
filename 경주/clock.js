function clock(){

  var el = document.getElementById('clock');
  var day = new Date();
  var hour = day.getHours();
  var minute = day.getMinutes();
  var second = day.getSeconds();
  var time = "";
  
// morning and afternoon code
// if "Time" is 12:00 p.m., 11:00 p.m. or more than breakfast
  if(hour>=12){
    time = "Korea || P.M "
  }else{
    time = "Korea || A.M "
  }
// change the contents of the internal html in the clip that was loaded into the document
  el.innerHTML = time + " " + hour + "H " +  minute + "min " + second + "sec " + " || "; 

// change the time that represents the seconds every 5 seconds
  var ttime = setInterval(clock,500);
}

clock();
