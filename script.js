// Set the date we're counting down to
var countDownDate = new Date("Mar 15, 2023 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

  // Get the current time
  var now = new Date().getTime();

  // Calculate the distance between now and the count down date
  var distance = countDownDate - now;

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the countdown elements
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is finished, clear the interval
  if (distance < 0) {

    //clearInterval(countdownInterval);
    //document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/1912551.jpg')";
    //document.body.style.backgroundColor = "#000";
    //document.querySelector("h1").innerHTML = "Happy Birthday Baby !!!!";
    //document.getElementById("countdown").innerHTML = "";
    // Redirect to post.html
  window.location.href = "post.html";
  }
}, 1000);
