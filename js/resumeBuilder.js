'"use strict"';

var bio = {
    'name': 'Juli Brady',
    'role': 'Junior Developer',
    'contacts': {
        'email': 'julibrady@gmail.com',
        'github': 'jabrad0',
        'githubURL': 'https://github.com/jabrad0',
        'twitter': '@Juli_Brady',
        'twitterURL': 'https://twitter.com/juli_brady',
        'linkedin': 'julibrady',
        'linkedinURL': 'https://www.linkedin.com/in/julibrady',
        'location': 'Nashville, TN',
        'place_id': 'ChIJPZDrEzLsZIgRoNrpodC5P30',
        'locationURL': 'https://en.wikipedia.org/wiki/Nashville,_Tennessee'
    },
    'location': 'Nashville, TN',
    'dates': 'Fall 2015',
    'place_id': 'ChIJPZDrEzLsZIgRoNrpodC5P30',
    'bioPic': 'images/300x300.jpg',
    'welcomeMessage': 'I\'m Juli Brady',
    'skills': ['Python', 'Javascript', 'HTML5', 'CSS', 'Flask', 'Jquery', 'AJAX', 'SQL', 'JSON', 'git', 'GitHub']
};
var education = {
    'schools': [{
        'name': 'Hackbright Academy',
        'location': 'San Francisco, California',
        'place_id': 'ChIJIQBpAG2ahYAR_6128GcTUEo',
        'degree': 'Technical Training in Full Stack Web Development',
        'major': 'NA',
        'dates': 'Fall 2014  ',
        'url': 'https://hackbrightacademy.com/'
    }, {
        'name': 'University of California, Davis',
        'location': 'Davis, California',
        'place_id': 'ChIJP1SVlJkphYAR_4_ibhs_AcM',
        'degree': 'MS',
        'major': 'Biological and Agricultural Engineering',
        'dates': '2001-2003 ',
        'url': 'http://bae.engineering.ucdavis.edu/'
    }, {
        'name': 'University of Kentucky',
        'location': 'Lexington, Kentucky',
        'place_id': 'ChIJJeuczClEQogR3U-MkEGD8IQ',
        'degree': 'BS',
        'major': 'Biological and Agricultural Engineering',
        'dates': '1995-2000 ',
        'url': 'http://www.uky.edu/bae/'
    }],
    'onlineCourses': [{
        'title': 'Front-End Nanodegree',
        'school': 'Udacity',
        'dates': 'Fall 2015 - Winter 2016',
        'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
    }, {
        'title': 'Python Courses: Object-Oriented, Collections, Functional Programming, RegEx, Flask',
        'school': 'Treehouse',
        'dates': '2015',
        'url': 'https://teamtreehouse.com/'
    }, {
        'title': 'Algorithms: Design and Analysis, Part 1',
        'school': 'Coursera',
        'dates': 'Winter 2015',
        'url': 'https://www.coursera.org/course/algo'
    }, {
        'title': 'Learn Python the Hard Way',
        'school': 'Zed Shaw',
        'dates': 'Summer 2014',
        'url': 'http://learnpythonthehardway.org/'
    }, {
        'title': 'CS50',
        'school': 'Harvard.edu',
        'dates': 'Spring 2014',
        'url': 'https://cs50.harvard.edu/'
    }]
};

var work = {
    'jobs': [{
            'employer': 'Streamborn',
            'title': 'Senior Engineer',
            'location': 'Berkeley, California',
            'place_id': 'ChIJ00mFOjZ5hYARk-l1ppUV6pQ',
            'dates': '2006-2010, 2013-2015',
            'url': 'https://www.linkedin.com/in/streamborn',
            'description': 'Slow-carb hashtag selfies, kitsch kinfolk retro DIY fanny pack raw denim swag meggings shoreditch tattooed gluten-free four loko. Pickled direct trade narwhal, hella mixtape knausgaard plaid biodiesel distillery.'
        }, {
            'employer': 'Iris Environmental',
            'title': 'Engineer',
            'location': 'Oakland, California',
            'place_id': 'ChIJA-2qKIt9hYARZ5N1NdUVtHE',
            'dates': '2010-2013',
            'url': 'http://www.irisenv.com/',
            'description': 'Vice green juice direct trade everyday carry banjo put a bird on it, ethical vinyl microdosing roof party. Paleo chambray slow-carb pitchfork. '
        }, {
            'employer': 'Kennedy-Jenks Consultants',
            'title': 'Staff Engineer',
            'location': 'Sacramento, California',
            'place_id': 'ChIJ-ZeDsnLGmoAR238ZdKpqH5I', //retrieved from placeData via Google in helper.js
            'dates': '2003-2006',
            'url': 'http://www.kennedyjenks.com/',
            'description': 'Letterpress before they sold out knausgaard, XOXO banh mi ramps readymade. Ugh food truck etsy poutine, sriracha asymmetrical tote bag next level truffaut helvetica.'
        }, {
            'employer': 'USDA',
            'title': 'Staff Engineer',
            'location': 'Moscow, Idaho',
            'place_id': 'ChIJ0WHAIi0hoFQRbK3q5g0V_T4',
            'dates': '2000',
            'url': 'http://www.fsa.usda.gov/',
            'description': 'Slow-carb hashtag selfies, kitsch kinfolk retro DIY fanny pack raw denim swag meggings shoreditch tattooed gluten-free four loko. Pickled direct trade narwhal, hella mixtape knausgaard plaid biodiesel distillery.'
        }

    ]
};

var projects = {
    'project' : [{
        'title' : 'Udacity FrontEnd Nanodegree',
        'stack' : ['Javascript', 'jQuery', 'HTML5', 'CSS', 'HTML5 Canvas', 'GoogleMaps API'],
        'url' : 'You are here!',
        'dates' : 'Fall 2015 - Winter 2016',
        'description' : 'This project is currently in progress and will have six mini projects upon completion. I signed up for the Udacity FrontEnd Nanodegree course in order to work on my fundamental understanding of responsive web design and optimization as well as continuing to work on my HTML, CSS, and Javascript skills. Including this resume page, and the associated portfolio site accompanying this page, I the link above will take you to a list of the pages with a brief description of their highlights.',
        //'images: ['{image href: alt text}, {}, {}...]
        'images' : {'images/udacity_P1_197x148.png': ["Screenshot of Portfolio Home Page", "More Stuff"], 'images/udacity_P2_197x148.png': ["Screenshot of Resume", "More words..."], 'images/udacity_P3_197x148.png': ["Screenshot of Arcade Game Webpage", "Arcade game was designed to Cliche chia wayfarers vinyl distillery godard lomo. Portland 8-bit lumbersexual, viral +1 ugh stumptown. Pug bespoke 3 wolf moon brooklyn, raw denim vegan heirloom gastropub bitters. Meh brunch organic fanny pack tilde street art hammock pinterest, helvetica williamsburg XOXO meggings microdosing farm-to-table."]}
    }, {
        'title' : 'Getgo',
        'stack' : ['Python','Javascript','Flask', 'jQuery', 'Ajax', 'Jinja', 'HTML5', 'CSS', 'GoogleMaps API', 'Twitter API'],
        'url' : 'https://getartandgo.herokuapp.com/',
        'dates' : 'Fall 2014',
        'description' : 'Getgo was my capstone project while attending Hackbright Academy. It was independantly developed in five weeks after five weeks of fullstack web development "bootcamp". I wanted to build an application to allow a user to find the best bike route to art and wine venues wuthin a certain distance of their current location within the city of Oakland CA. I also wanted to log the users travels for the day and report their adventure back to them.',
        'images' : {'images/getgo_home_197x148.png':["Screenshot of Getgo Application Home Page", "Getgo Stuff"], 'images/getgo_route_197x148.png':["Second Screenshot of Getgo Application", "More Getgo Stuff"], 'images/getgo_summary_197x148.png':["Second Screenshot of Getgo Application", "And More Getgo Stuff"]}
    }, {
        'title' : 'Spiritual Corky',
        'stack' : ['Python','Twitter API'],
        'url' : 'https://twitter.com/spiritual_corky',
        'dates' : 'Winter 2015',
        'description' : 'ALSO MENTION N-grams  This project is a Python script I run from my Mac terminal. The script generates a mashup quote from the movies "Waiting for Guffman" and "Jesus Christ Superstar" using <a href = www.google.com class="inline_link">Markov Chains </a>, then uses the Twitter API to create live Twitter feed.',
        'images' : {'images/corky_home_197x148.png':["Screenshot of Twitter Feed for Spiritual Corky", "Twitter Stuff"]}
    }]
};




// HEADER Begin
//Bio via an 'Encapsulating Function'
var data = '%data%';
var $header = $("#header");
var $topContacts = $("#topContacts");
var $footerContacts = $("#footerContacts");
var $workEntryLast = $(".work-entry:last");

bio.display = function() {
    // Name and Title
    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    $header.prepend(formattedRole);
    $header.prepend(formattedName);

    // Contact Info
    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);

    var formattedLinkedin = HTMLlinkedin;
    var formattedLinkedinURL = HTMLlinkedinURL.replace(data,
      bio.contacts.linkedin).replace("#",  bio.contacts.linkedinURL);
    var formattedLinkedinLinkedinURL = formattedLinkedin + formattedLinkedinURL;

    var formattedTwitter = HTMLtwitter;
    var formattedTwitterURL = HTMLtwitterURL.replace(data,
      bio.contacts.twitter).replace("#", bio.contacts.twitterURL);
    var formattedTwitterTwitterURL = formattedTwitter + formattedTwitterURL;

    var formattedGithub = HTMLgithub;
    var formattedGithubURL = HTMLgithubURL.replace(data,
      bio.contacts.github).replace("#", bio.contacts.githubURL);
    var formattedGithubGithubURL = formattedGithub + formattedGithubURL;

    var formattedLocation = HTMLlocation;
    var formattedLocationURL = HTMLlocationURL.replace(data,
      bio.contacts.location).replace("#",  bio.contacts.locationURL);
    var formattedLocationLocationURL = formattedLocation + formattedLocationURL;

    $("#topContacts, #footerContacts").append(formattedEmail,formattedLinkedinLinkedinURL,
      formattedTwitterTwitterURL,formattedGithubGithubURL,formattedLocationLocationURL);

    //bioPic
    var formattedBioPic = HTMLbioPic.replace(data, bio.bioPic);
    $header.append(formattedBioPic);

    // Skills At A Glance
    if (bio.skills.length) {
        $header.append(HTMLskillsStart);
        for (var i = 0; i < (bio.skills.length); i++) {
            var formattedSkill = HTMLskills.replace(data, bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
};
// HEADER End

//Work Experience via an 'Encapsulating Function'
work.display = function() {
  var lenJobs = work.jobs.length;
  for (var i=0; i < lenJobs; i++) {
    var thisJob = work.jobs[i];
    $("#work-experience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace(data, thisJob.employer)
      .replace("#", thisJob.url);
    var formattedTitle = HTMLworkTitle.replace(data, thisJob.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedLocation = HTMLworkLocation.replace(data, thisJob.location);
    var formattedDates = HTMLworkDates.replace(data, thisJob.dates);
    var formattedDescription = HTMLworkDescription.replace(data, thisJob.description);
    $(".work-entry:last").append(formattedEmployerTitle,formattedLocation,
      formattedDates,formattedDescription);
  }
};

//Projects via an 'Encapsulating Function'
projects.display = function() {
  var lenProjects = projects.project.length;


  for (var i=0; i < lenProjects; i++ ) {
    var thisProject = projects.project[i];
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace(data, thisProject.title)
      .replace("#", thisProject.url);
    var formattedURL = HTMLprojectURL.replace(data, thisProject.url);
    var formattedTitleURL = formattedTitle + formattedURL;
    var formattedDates = HTMLprojectDates.replace(data, thisProject.dates);
    var formattedDescription = HTMLprojectDescription.replace(data,
      thisProject.description);
    $(".project-entry:last").append(formattedTitleURL);

    $(".project-entry:last").append(HTMLstackStart);
    var lenStack = thisProject.stack.length;
    for (var j=0; j<lenStack; j++) {
      var separator = (j === (lenStack - 1) ) ? " " : ",  ";
      var formattedStack = HTMLstack.replace(data, thisProject.stack[j]);
      $(".project-entry:last").append(formattedStack + separator);
    }

    $(".project-entry:last").append(formattedDates,formattedDescription);

    for (var key in thisProject.images) {
      var formattedImage = HTMLprojectImage.replace(data, key)
        .replace("#", key).replace(data, thisProject.images[key][0]);
      $(".project-entry:last").append(formattedImage);
    }
  }


// Start Lightbox code

  var $overlay = $("<div id='overlay'></div>");
  var $image = $("<img class='lightbox-img'>");
  var $caption = $("<p class='project-focus'></p>");

  $overlay.append($image);    //An image to overlay
  $overlay.append($caption);  //A caption to overlay

  $("body").append($overlay);

  $("#projects a").click(function(event){
    event.preventDefault();
    var imageLocation = $(this).attr("href");
    $image.attr("src", imageLocation);
    $overlay.show();

    //Locate caption text for clicked image and display as a caption
    var captionLink = $(this).children("img").attr("src"); //linking back to key of images src = href
    for (var i=0; i < lenProjects; i++ ) {
      for (key in projects.project[i].images){
        if (key === captionLink) {
          var captionText = projects.project[i].images[captionLink][1];
          $caption.text(captionText);
        }
      }
    };
  });

  $overlay.click(function(){
    $overlay.hide();
  });   // End lightbox code
}; //End Projects Encapsulating Function


//Education via an 'Encapsulating Function'
education.displaySchools = function() {
  var lenEducation = education.schools.length;
  for (var i=0; i < lenEducation; i++ ) {
    var thisSchool = education.schools[i];
    $education.append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace(data, thisSchool.name)
      .replace("#", thisSchool.url);
    var formattedDegree = HTMLschoolDegree.replace(data, thisSchool.degree);
    var formattedNameDegree = formattedName + formattedDegree;
    var formattedDates = HTMLschoolDates.replace(data, thisSchool.dates);
    var formattedLocation = HTMLschoolLocation.replace(data, thisSchool.location);
    $(".education-entry:last").append(formattedNameDegree, formattedDates,
      formattedLocation);
    if (thisSchool.major === "NA") {
      var HTMLschoolMajor = '<em><br>%data%</em>';
      var formattedMajor = HTMLschoolMajor.replace(data, " ");
      $(".education-entry:last").append(formattedMajor);
    } else {
      var HTMLschoolMajor = '<em><br>Major: %data%</em>';
      formattedMajor = HTMLschoolMajor.replace(data, education.schools[i].major);
      $(".education-entry:last").append(formattedMajor);
    }
  }
};


var $education = $("#education");
education.displayOnline = function() {
  var lenEducationOnline = education.onlineCourses.length;
  $education.append(HTMLonlineClasses);
  for (var i=0; i < lenEducationOnline; i++ ) {
    var thisOnlineCourse = education.onlineCourses[i];
    $education.append(HTMLschoolStart);
    var formattedTitle = HTMLonlineTitle.replace(data, thisOnlineCourse.title)
      .replace("#", thisOnlineCourse.url);
    var formattedSchool = HTMLonlineSchool.replace(data, thisOnlineCourse.school);
    var formattedTitleSchool = formattedTitle + formattedSchool;
    var formattedDates = HTMLonlineDates.replace(data, thisOnlineCourse.dates);
    var formattedonlineURL = HTMLonlineURL.replace(data, thisOnlineCourse.url)
      .replace("#", thisOnlineCourse.url);
    $(".education-entry:last").append(formattedTitleSchool,formattedDates,
      formattedonlineURL);
  }
};

bio.display();
work.display();
projects.display();
education.displaySchools();
education.displayOnline();

//Google Map
$("#mapDiv").append(googleMap);
