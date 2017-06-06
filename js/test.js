$(document).ready(function () {
  var headerText = "Recent Clemson Graduate: Seeking to refine his software\
                    skills to grow as a young software developer";
  $("#headerText").text(headerText);
});

$(document).ready(function () {
  var aboutText = "Born and raised in Ambato, Ecuador, my family and I moved\
                    to the United States in search of better lifestyle\
                    opportunities. Recent graduate from Clemson University as\
                    a Computer Engineer. My attraction to this field stems from\
                    my exuberant interest in technology; I often find myself\
                    spending hours reading articles on its advances and\
                    breakthroughs";
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
