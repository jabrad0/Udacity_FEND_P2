var bio = {
  "name": "Juli Brady",
  "role": "Junior Developer",
  "contacts": {
    "email": "julibrady@gmail.com",
    "github": "jabrad0",
    "twitter": "@Juli_Brady",
    "linkedin": "julibrady",
    "location": "Nashville, TN"
  },
  "location": "Nashville, TN",
  "bioPic": "images/300x300.jpg",
  "welcome_message": "I'm Juli Brady",
  "skills": [" Python", " Javascript", " HTML5", " CSS", 'Flask', 'Jquery']
}
var education = {
  "schools": [
    {
      "name": "Hackbright Academy",
      "location": "San Francisco, California",
      "degree": "Technical Training in Full Stack Web Development",
      "major": "not applicable",
      "dates": "Fall 2014  ",
      "url":"https://hackbrightacademy.com/"
    },
    {
      "name": "University of California, Davis",
      "location": "Davis, California",
      "degree": "MS",
      "major": "Biological and Agricultural Engineering",
      "dates": "2001-2003 ",
      "url":"http://bae.engineering.ucdavis.edu/"
    },
    {
      "name": "University of Kentucky",
      "location": "Lexington, Kentucky",
      "degree": "BS",
      "major": "Biological and Agricultural Engineering",
      "dates": "1995-2000 ",
      "url":"http://www.uky.edu/bae/"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Nanodegree",
      "school": "Udacity",
      "dates": "Fall 2015",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      "title": "Python Stuff - List out",
      "school": "Treehouse",
      "dates": "2015",
      "url": "www.xyx"
    },
    {
      "title": "Algorithm Design",
      "school": "Coursera",
      "dates": "Winter 2015",
      "url": "www.xyx"
    },
    {
      "title": "Learn Python the Hard Way",
      "school": "xyz",
      "dates": "Summer 2014",
      "url": "www.xyx"
    },
    {
      "title": "CS90",
      "school": "Coursera",
      "dates": "Spring 2014",
      "url": "www.xyx"
    }
  ]
}

var work = {
  "jobs": [
    {
      "employer": "Streamborn",
      "title": "Senior Engineer",
      "location": "Berkeley, California",
      "dates": "2006-2010, 2013-2015",
      "url": "https://www.linkedin.com/in/streamborn",
      "description": "Slow-carb hashtag selfies, kitsch kinfolk retro DIY fanny pack raw denim swag meggings shoreditch tattooed gluten-free four loko. Pickled direct trade narwhal, hella mixtape knausgaard plaid biodiesel distillery."
    },
    {
      "employer": "Iris Environmental",
      "title": "Engineer",
      "location": "Oakland, California",
      "dates": "2010-2013",
      "url": "http://www.irisenv.com/",
      "description": "Vice green juice direct trade everyday carry banjo put a bird on it, ethical vinyl microdosing roof party. Paleo chambray slow-carb pitchfork. "
    },
    {
      "employer": "Kennedy-Jenks Consultants",
      "title": "Staff Engineer",
      "location": "Sacramento, California",
      "dates": "2003-2006",
      "url": "http://www.kennedyjenks.com/",
      "description": "Letterpress before they sold out knausgaard, XOXO banh mi ramps readymade. Ugh food truck etsy poutine, sriracha asymmetrical tote bag next level truffaut helvetica."
    },
    {
      "employer": "USDA",
      "title": "Staff Engineer",
      "location": "Moscow, Idaho",
      "dates": "2000",
      "url": "http://www.fsa.usda.gov/",
      "description": "Slow-carb hashtag selfies, kitsch kinfolk retro DIY fanny pack raw denim swag meggings shoreditch tattooed gluten-free four loko. Pickled direct trade narwhal, hella mixtape knausgaard plaid biodiesel distillery."
    }

  ]
}

var projects = {
  "projects": [
    {
      "title":"Udacity FrontEnd Nanodegree",
      "url":"url here",
      "dates":"Fall 2015",
      "description": "Skateboard YOLO austin hoodie, squid cred hammock schlitz craft beer asymmetrical green juice. Ethical PBR&B you probably haven't heard of them blue bottle lo-fi bespoke, stumptown schlitz. Ugh try-hard occupy hoodie meh, beard brooklyn tofu. Fap iPhone blue bottle bitters fixie crucifix. Cold-pressed shabby chic venmo, schlitz cronut bitters slow-carb vinyl cliche aesthetic gluten-free. Listicle humblebrag fashion axe actually.",
      "images": ["images/197x148.gif", "images/197x148.gif"]
    },
    {
      "title":"Getgo",
      "url":"https://getartandgo.herokuapp.com/",
      "dates":"Fall 2014",
      "description": "Kinfolk cray raw denim lumbersexual, waistcoat pork belly tacos wolf shabby chic. Microdosing thundercats roof party, tattooed dreamcatcher migas actually hoodie ennui mixtape umami twee tofu kogi 3 wolf moon. Trust fund 8-bit pitchfork, hammock cold-pressed keffiyeh crucifix aesthetic migas.",
      "images": ["images/197x148.gif", "images/197x148.gif"]
    },
    {
      "title":"Spiritual Corky",
      "url":"https://twitter.com/spiritual_corky",
      "dates":"Winter 2015",
      "description": "Hashtag tofu yuccie shabby chic, leggings 90's meh flexitarian sriracha ramps green juice forage migas chillwave. Cornhole actually chicharrones, lomo fap pitchfork single-origin coffee chambray shabby chic post-ironic messenger bag four dollar toast irony viral. Polaroid pork belly marfa, chia salvia cred mlkshk pour-over irony butcher twee forage 8-bit wolf. ",
      "images": ["images/197x148.gif", "images/197x148.gif"]
    }
  ]
}

// HEADER Begin
bio.display = function() {
  // Name and Title
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  // Contact Info
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedEmail);
  $("#footerContacts").append(formattedEmail);
  var formattedLinkedIn = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
  $("#topContacts").append(formattedLinkedIn);
  $("#footerContacts").append(formattedLinkedIn);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts").append(formattedGithub);
  $("#footerContacts").append(formattedGithub);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  $("#topContacts").append(formattedTwitter);
  $("#footerContacts").append(formattedTwitter);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedLocation);
  // $("#topContacts").append(formattedLocation);

  //bioPic
  var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").append(formattedbioPic);

  // Skills At A Glance
  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < (bio.skills.length); i++) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(formattedSkill);
    };
  };
};
// HEADER End

//Work Experience via an 'Encapsulating Function'
work.display = function() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    formattedEmployer = formattedEmployer.replace("#", work.jobs[job].url);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  };
};

//Projects via an 'Encapsulating Function'
projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    formattedTitle = formattedTitle.replace("#", projects.projects[project].url);
    var formattedURL = HTMLprojectURL.replace("%data%", projects.projects[project].url);
    var formattedTitleURL = formattedTitle + formattedURL;
    $(".project-entry:last").append(formattedTitleURL);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      };
    };
  };
};

//Education via an 'Encapsulating Function'
education.displaySchools = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
    formattedName = formattedName.replace("#", education.schools[school].url );
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedNameDegree = formattedName + formattedDegree;
    $(".education-entry:last").append(formattedNameDegree);
    var formattedDates= HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    $(".education-entry:last").append(formattedMajor);
  };
};

education.displayOnline = function() {
  $("#education").append(HTMLonlineClasses);
  for (onlineCourse in education.onlineCourses) {
  $("#education").append(HTMLschoolStart);
  var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
  formattedTitle = formattedTitle.replace("#", education.onlineCourses[onlineCourse].url);
  var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
  var formattedTitleSchool = formattedTitle + formattedSchool;
  $(".education-entry:last").append(formattedTitleSchool);
  var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
  $(".education-entry:last").append(formattedDates);
  var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
  $(".education-entry:last").append(formattedonlineURL);
   };
};

bio.display();
work.display();
projects.display();
education.displaySchools();
education.displayOnline();


//Google Map
$("#mapDiv").append(googleMap);






















//
// pushing screen down
