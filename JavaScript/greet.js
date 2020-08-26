var now = new Date();
var hrs = now.getHours();
var msg = "";

if (hrs >  0) msg = "Mornin' Sunshine!"; // REALLY early
if (hrs >  4) msg = "Good Morning!";      // After 6am
if (hrs > 6) msg = "Good Afternoon!";    // After 12pm
if (hrs > 17) msg = "Good Evening!";      // After 5pm
if (hrs > 23) msg = "Go to bed!";        // After 10pm

document.write(msg+" "+" Welcome to my website.");
