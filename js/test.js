$(document).ready(function () {
  var headerText = "Latino Software Engineer currently focusing on mobile\
                   development with Swift 5, UIKit, & SwiftUI.";
  $("#headerText").text(headerText);
});

$(document).ready(function () {
  var aboutText = "I'm a Latino Software Engineer graduate from Clemson University\
                   and now pursuing a Master's in CS with a Machine Learning\
                   specialization. My attraction to this field stems from my exuberant\
                   interest in technology; I often find myself spending hours reading\
                   articles on its advances and breakthroughs. \
                   Outside of my career, I focus on STEM awareness for minorities in my\
                   community. I'm proud to be a leader for the SHPE-DFW organization which\
                   provides me the right platform to give back. I would not be who I am without\
                   the help & guidance of a plethora of individuals and I hope to be that mentor\
                   for others as I grow in my career.";
  $("#aboutText").text(aboutText);
});

$(document).ready(function () {
  var dob, d, age, aboutHeading;
  dob = new Date("09/01/1994")
  d = new Date();
  diff = new Date(d - dob);
  age = Math.abs(diff.getUTCFullYear() - 1970).toString();
  aboutHeading = "Latino Computer Engineer (" + age + " yr)" ;
  $("#aboutHeading").text(aboutHeading);
});

$(document).ready(function () {
  var contactText = "Have a project in mind or are simply interested in\
                      finding out more, feel free to contact me.";
  $("#contactText").text(contactText);
});

$(document).ready(function () {
  var date, copyrightText;
  year = new Date().getFullYear().toString();
  copyrightText = " " + year + " by Andrés Vinueza";
  $("#copyright").text(copyrightText);
});
