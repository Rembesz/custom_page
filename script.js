const timeEl = document.querySelector(".time"),
  dateEl = document.querySelector(".date"),
  wish = document.getElementById("wish"),
  toggle = document.querySelector(".toggle"),
  days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

function setTime() {
  const time = new Date(),
    year = time.getFullYear(),
    month = time.getMonth(),
    day = time.getDay(),
    date = time.getDate(),
    hours = time.getHours(),
    hoursForClock = hours >= 13 ? hours % 12 : hours,
    minutes = time.getMinutes(),
    ampm = hours >= 12 ? "PM" : "AM";

  var wishTime = ["Good Morning", "Good Afternoon", "Good Evening"];
  if (hours < 12) {
    wish.innerHTML = `${wishTime[0]} REN, what's your main focus today`;
  } else if (hours < 17) {
    wish.innerHTML = `${wishTime[1]} REN, what's your main focus today`;
  } else {
    wish.innerHTML = `${wishTime[2]} REN, what's your main focus today`;
  }

  setInterval(() => {
    wish.innerHTML = "";
  }, 60 * 60 * 1000);

  timeEl.innerHTML = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;
  dateEl.innerHTML = `${days[day]} <span>  ${date}-</span>${months[month]}-${year}`;
}

setTime();

setInterval(setTime, 1000);

const url = "https://api.quotable.io/random";
function generateQuote() {
  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      document.getElementById("quote").innerHTML = data.content;
    })
    .catch(function (err) {
      console.log(err);
    });
}
setInterval(generateQuote(), 10000);

$("#inpt_search").on('focus', function () {
	$(this).parent('label').addClass('active');
});

$("#inpt_search").on('blur', function () {
	if($(this).val().length == 0)
		$(this).parent('label').removeClass('active');
});


var input = document.getElementById("inpt_search");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

const image = "https://api.unsplash.com/photos/random?client_id=G7UEqPgI-ngqb33KHM_NJ-OKPL1bIEE3WpYyTnkhMHg&query=view";
function getBg(){
 fetch(image)
	.then(function (data) {return data.json();
	.then(function (data) {document.getElementById("latarb").innerHTML = data.urls;})
    	.catch(function (err) {console.log(err);
    });
}
