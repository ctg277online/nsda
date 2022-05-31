
let postedDate = document.getElementById("date");
let postedTime = document.getElementById("time");


let postedDate2 = document.getElementById("date2");
let postedTime2 = document.getElementById("time2");


let postedDate3 = document.getElementById("date3");
let postedTime3 = document.getElementById("time3");


let postedDate4 = document.getElementById("date4");
let postedTime4 = document.getElementById("time4");



let current = new Date();

postedDate.innerHTML = current.toLocaleDateString();
postedTime.innerHTML = current.toLocaleTimeString();


postedDate2.innerHTML = current.toLocaleDateString();
postedTime2.innerHTML = current.toLocaleTimeString();


postedDate3.innerHTML = current.toLocaleDateString();
postedTime3.innerHTML = current.toLocaleTimeString();


postedDate4.innerHTML = current.toLocaleDateString();
postedTime4.innerHTML = current.toLocaleTimeString();

