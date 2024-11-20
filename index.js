const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

//Endpoint for Shout a Name in Uppercase, <http://localhost:3000/shout?name=Thrilok>
app.get("/shout", (req, res) => {
  let name = req.query.name;
  let upperCaseName = name.toUpperCase();
  res.send(upperCaseName);
});

//Endpoint for String concatenation, <http://localhost:3000/fullName?firstName=Thrilok & lastName=Naidu>
app.get("/FullName", (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let fullName = firstName + " " + lastName;
  res.send(fullName);
});

//Endpoint for concatenate month and year for date, <http://localhost:3000/date?month=Nov&year=2024>
app.get("/date", (req, res) => {
  let month = req.query.month;
  let year = req.query.year;
  let date = month+ ", " + year;
  res.send(date);
});

//Endpoint for Greeting with given name, <http://localhost:3000/greet?name=Thrilok>
app.get("/greet", (req, res) => {
  let name = req.query.name;
  let greet = "Namaste, " + name + "!";
  res.send(greet);
});

//Endpoint for Greeting with given name, <http://localhost:3000/greet?name=Thrilok>
app.get("/greet", (req, res) => {
  let name = req.query.name;
  let greet = "Namaste, " + name + "!";
  res.send(greet);
});

//Endpoint for returning formatting address, <http://localhost:3000/address?street=123+Main+St&city=Springfield&state=IL>
app.get("/address", (req, res) => {
  let street = req.query.street;
  let city = req.query.city;
  let state = req.query.state;
  let address = street +", " + city + ", " + state;

  res.send(address);
});


//Endpoint for returning formatted Email, <http://localhost:3000/email?username=Thrilok&domain=example.com>
app.get("/email", (req, res) => {
  let username = req.query.username;
  let domain = req.query.domain;
  let email = username +"@" + domain;

  res.send(email);
});

//Endpoint for calculating total distance covered by adding two trips, <http://localhost:3000/total-distance?distance1=120&distance2=80>
app.get("/total-distance", (req, res) => {
  let distance1 = parseFloat(req.query.distance1);
  let distance2 = parseFloat(req.query.distance2);
  let totalDistance = distance1 + distance2;

  res.send(totalDistance.toString());
});

//Endpoint for calculating total time spend on multiple activities  <http://localhost:3000/total-time?time1=2&time2=3&time3=1>
app.get("/total-time", (req, res) => {
  let time1 = parseFloat(req.query.time1);
  let time2 = parseFloat(req.query.time2);
  let time3 = parseFloat(req.query.time3);
  let totalTime = time1 + time2 + time3;

  res.send(totalTime.toString());
});

//Endpoint for calculating total time spend on multiple activities  <http://localhost:3000/total-time?time1=2&time2=3&time3=1>
app.get("/total-time", (req, res) => {
  let time1 = parseFloat(req.query.time1);
  let time2 = parseFloat(req.query.time2);
  let time3 = parseFloat(req.query.time3);
  let totalTime = time1 + time2 + time3;

  res.send(totalTime.toString());
});

//Endpoint for calculating average speed gven distance and time <http://localhost:3000/average-speed?totalDistance=300&totalTime=5average-speed?totalDistance=300&totalTime=5>
app.get("/average-speed", (req, res) => {
  let totalDistance = parseFloat(req.query.totalDistance);
  let totalTime = parseFloat(req.query.totalTime);
  let averageSpeed = totalDistance/totalTime;
  res.send(averageSpeed.toString());
});

//Endpoint for calculating Estimated time of arrival <http://localhost:3000/eta?totalDistance=120&totalSpeed=60>
app.get("/eta", (req, res) => {
  let totalDistance = parseFloat(req.query.totalDistance);
  let totalSpeed = parseFloat(req.query.totalSpeed);
  let eta = totalDistance/totalSpeed;
  res.send(eta.toString());
});

//Endpoint for calculating Estimated time of arrival <http://localhost:3000/totalCalories?duration1=30&duration2=20&caloriesPerMinuite=10>
app.get("/total-calories", (req, res) => {
  let duration1 = parseFloat(req.query.duration1);
  let duration2 = parseFloat(req.query.duration2);
  let caloriesPerMinuite = parseFloat(req.query.caloriesPerMinuite);
  let totalCalories = (duration1 + duration2) * caloriesPerMinuite;
  res.send(totalCalories.toString());
});

//Endpoint for calculating Estimated time of arrival <http://localhost:3000/interest-earned?principal=1000&rate=5&time=2>
app.get("/interest-earned", (req, res) => {
  let principal = parseFloat(req.query.principal);
  let rate = parseFloat(req.query.rate);
  let time = parseFloat(req.query.time);
  let totalInterestEarned = (principal*rate*time)/100;
  res.send(totalInterestEarned.toString());
});

//########  If Else Concept #######################

//Endpoint for checking if number is positive or negative <http://localhost:3000/check-number?number=-10>
app.get("/check-number", (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number >= 0) {
    result = 'positive';
  } else {
    result = 'negative';
  }
  res.send('Number is ' + result);
});

//Endpoint for checking if number is Even or Odd <http://localhost:3000/check-number?number=-10>
app.get("/check-EvenorOdd", (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number%2 == 0) {
    result = 'Number is Even';
  } else {
    result = 'Number is Odd';
  }
  res.send(result);
});

//Endpoint for checking if User is logged in <http://localhost:3000/check-login?isLoggedIn=true>
app.get("/check-login", (req, res) => {
  let isLoggedIn = req.query.isLoggedIn === 'true';
  let result;
  if (isLoggedIn) {
    result = 'User is Logged in.';
  } else {
    result = 'User is not logged in.';
  }
  res.send(result);
});

//Endpoint for checking if a user is Eligible for Discount <http://localhost:3000/check-discount?age=26>
app.get("/check-discount", (req, res) => {
  let age = parseFloat(req.query.age);
  let result;
  if (age > 65) {
    result = 'User is eligible for a discount.';
  } else {
    result = 'User is not eligible for a discount.';
  }
  res.send(result);
});

//Endpoint for checking if a number is positive, negative, or zero<http://localhost:3000/check-discount?age=26>
app.get("/check-number-type", (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number > 0) {
    result = 'Positive';
  } else if (number < 0){
    result = 'Negative';
  } else{
    result = 'zero'
  }
  res.send('Number is ' + result);
});

//Endpoint for checking if a number is positive, negative, or zero<http://localhost:3000/check-discount?age=26>
app.get("/check-number-type", (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number > 0) {
    result = 'Positive';
  } else if (number < 0){
    result = 'Negative';
  } else{
    result = 'zero'
  }
  res.send('Number is ' + result);
});

//Endpoint for checking if User's activity level is Low,Moderate, or High<http://localhost:3000/check-activity?activity=50000>
app.get("/check-activity", (req, res) => {
  let activity = parseFloat(req.query.activity);
  let result;
  if (activity > 10000) {
    result = 'High';
  } else if (activity < 5000){
    result = 'Low';
  } else{
    result = 'Moderate'
  }
  res.send('Activity Level is ' + result);
});

//Endpoint for checking if Temperature is cold , warm, hot, or zero<http://localhost:3000/check-temperature?temeprature=26>
app.get("/check-temperature", (req, res) => {
  let temperature = parseFloat(req.query.temperature);
  let result;
  if (temperature > 25) {
    result = 'Hot';
  } else if (temperature < 15){
    result = 'Cold';
  } else{
    result = 'Warm';
  }
  res.send('Temperature is ' + result);
});

//Endpoint for checking if Social Media Post has low,Medium, or High <http://localhost:3000/check-engagement?likes=600>
app.get("/check-engagement", (req, res) => {
  let likes = parseFloat(req.query.likes);
  let result;
  if (likes > 500) {
    result = 'high';
  } else if (likes < 100){
    result = 'low';
  } else{
    result = 'medium';
  }
  res.send('Engagement level is ' + result);
});

//############Functions concept#############################

//Endpoint for returning a welcome message  <http://localhost:3000/welcome>
function getWelcomeMessage() {
  return 'Welcome to our service!'
}
app.get("/welcome", (req, res) => {
  
  res.send(getWelcomeMessage());
});


//Endpoint for returning a Greeting message  <http://localhost:3000/greeting?username=Thrilok>
function getGreetMessage(username) {
  return 'Hello,' + username + '!'
}
app.get("/greeting", (req, res) => {
  let username = req.query.username;
  res.send(getGreetMessage(username));
});

//Endpoint for checking password strength <http://localhost:3000/check-password?password=Thrilok@8790>
function checkPassword(password) {
  if(password.length >15){
    return 'Pawword is Strong'
  }else{
    return 'Password is Weak'
  }
}
app.get("/check-password", (req, res) => {
  let password = req.query.password;
  res.send(checkPassword(password));
});

//Endpoint for returning sum of two numbers <http://localhost:3000/sum?num1=15&num2=15>
function sum(num1,num2) {
  let sum;
  sum = num1 + num2;
  return sum.toString()
}
app.get("/sum", (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(sum(num1,num2));
});

//Endpoint for returning Subscription Status <http://localhost:3000/subscription-status?username=Thrilok&isSubscribed=false>
function checkSubscription(username,subscribed) {
 if(subscribed === 'true'){
   return username + " is subscribed";
 }else {
   return username + "is not subscribed";
 }
}
app.get("/subscription-status", (req, res) => {
  let username = req.query.username;
  let subscribed = req.query.isSubscribed;
  res.send(checkSubscription(username,subscribed));
});

//Endpoint for returning Final Price after discount <http://localhost:3000/discounted-price?price=100&discount=10>
function discountedPrice(price,discount) {
  let priceAfterDiscount = (price - (price * discount/100));
  return priceAfterDiscount.toString();
 }
 app.get("/discounted-price", (req, res) => {
   let price = parseFloat( req.query.price);
   let discount = parseFloat(req.query.discount);
   res.send(discountedPrice(price,discount));
 });

 //Endpoint for returning Personlized greetin Message<http://localhost:3000/personalized-greeting?age=26&gender=male&name=Thrilok>
function getGreeting(age, gender, name) {
  return "Hello, " + name + "! You are a " + age + " year old " + gender + "."
 }
 app.get("/personalized-greeting", (req, res) => {
   let age = req.query.age;
   let gender = req.query.gender;
   let name = req.query.name;
   res.send(getGreeting(age, gender, name));
 });

  //Endpoint for returning Personlized greetin Message<http://localhost:3000/final-price?price=100&discount=10&tax=5>
function finalPrice(price,discount,tax) {
  let priceAfterDiscount = price - (price * (discount/100));
  let finalPrice = priceAfterDiscount + (priceAfterDiscount * (tax/100));
  return finalPrice.toString();
  }
 app.get("/final-price", (req, res) => {
   let price = parseFloat(req.query.price);
   let discount = parseFloat(req.query.discount);
   let tax = parseFloat(req.query.tax);
   res.send(finalPrice(price,discount,tax));
 });

  //Endpoint for returning Total Exercise Time<http://localhost:3000/total-exercise-time?running=10&cycling=20&swimming=30>
function totalExerciseTime(running,cycling,swimming) {
  return running + cycling + swimming;
  }
 app.get("/total-exercise-time", (req, res) => {
   let running = parseFloat(req.query.running);
   let  cycling = parseFloat(req.query.cycling);
   let swimming = parseFloat(req.query.swimming);
   res.send(totalExerciseTime(running,cycling,swimming).toString());
 });

























app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
