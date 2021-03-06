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
    'skills': ['Python', 'Javascript', 'HTML5', 'CSS', 'Flask', 'Jquery', 'AJAX', 'SQL', 'Bootstrap', 'JSON', 'git', 'GitHub', 'Grunt']
};
var education = {
    'schools': [{
        'name': 'Hackbright Academy',
        'location': 'San Francisco, California',
        'place_id': 'ChIJIQBpAG2ahYAR_6128GcTUEo',
        'degree': 'Full Stack Web Development',
        'major': 'NA',
        'dates': 'Fall 2014  ',
        'url': 'https://hackbrightacademy.com/',
        'publication' : 'NA'
    }, {
        'name': 'University of California, Davis',
        'location': 'Davis, California',
        'place_id': 'ChIJP1SVlJkphYAR_4_ibhs_AcM',
        'degree': 'MS',
        'major': 'Biological and Agricultural Engineering',
        'dates': '2001-2003 ',
        'url': 'http://bae.engineering.ucdavis.edu/',
        'publication' : 'http://www.sciencedirect.com/science/article/pii/S0167880905005633'
    }, {
        'name': 'University of Kentucky',
        'location': 'Lexington, Kentucky',
        'place_id': 'ChIJJeuczClEQogR3U-MkEGD8IQ',
        'degree': 'BS',
        'major': 'Biological and Agricultural Engineering',
        'dates': '1995-2000 ',
        'url': 'http://www.uky.edu/bae/',
        'publication' : 'NA'
    }],
    'onlineCourses': [{
        'title': 'Front-End Nanodegree',
        'school': 'Udacity',
        'dates': 'Fall 2015 - Winter 2016',
        'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
    }, {
        'title': 'Node.js Basics',
        'school': 'Treehouse',
        'dates': 'Fall 2015',
        'url': 'https://teamtreehouse.com/library/nodejs-basics'
    }, {
        'title': 'AJAX Basics',
        'school': 'Treehouse',
        'dates': 'Fall 2015',
        'url': 'https://teamtreehouse.com/library/ajax-basics'
    },{
        'title': 'How to Use Git and GitHub',
        'school': 'Udacity',
        'dates': 'Fall 2015',
        'url': 'https://www.udacity.com/course/how-to-use-git-and-github--ud775'
    }, {
        'title': 'Various Python Courses',
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
            'description': 'Managed simultaneous projects, budgets, and deadlines for ongoing investigation remediation projects. Projects included large scale excavations, subsurface drilling, construction, and implementation of remediation systems. Prepared proposals and cost estimates for clients. Interacted with clients and government regulators. Made on-the-spot project decisions in the field.'
        }, {
            'employer': 'Iris Environmental',
            'title': 'Engineer',
            'location': 'Oakland, California',
            'place_id': 'ChIJA-2qKIt9hYARZ5N1NdUVtHE',
            'dates': '2010-2013',
            'url': 'http://www.irisenv.com/',
            'description': 'Collaborated with teams regarding investigation remediation project strategies. Managed multiple internal staff, contractors, and projects. Prepared technical reports. Developed a sampling program and trained staff on best use.'
        }, {
            'employer': 'Kennedy-Jenks Consultants',
            'title': 'Staff Engineer',
            'location': 'Sacramento, California',
            'place_id': 'ChIJ-ZeDsnLGmoAR238ZdKpqH5I', //retrieved from placeData via Google in helper.js
            'dates': '2003-2006',
            'url': 'http://www.kennedyjenks.com/',
            'description': 'Conducted field work to investigate contaminated soil and groundwater. Produced project investigation reports. Provided QA/QC on large amounts of investigation data.'
        }, {
            'employer': 'USDA',
            'title': 'Staff Engineer',
            'location': 'Moscow, Idaho',
            'place_id': 'ChIJ0WHAIi0hoFQRbK3q5g0V_T4',
            'dates': '2000',
            'url': 'http://www.fsa.usda.gov/',
            'description': ['Conducted post-wildfire research in the Bitterroot Valley of Montana in order to compare simulated rain infiltration rates on severly burned areas with that of undistrubed areas.', 'http://forest.moscowfsl.wsu.edu/engr/library/Robichaud/Robichaud2001i/2001i.html']
        }

    ]
};

var projects = {
     'project': [{
      'title': 'Udacity FrontEnd Nanodegree',
      'stack': ['Javascript', 'jQuery', 'HTML5', 'CSS', 'HTML5 Canvas', 'Bootstrap', 'Grunt', 'GoogleMaps API'],
      'url': 'NA',
      'dates': 'Fall 2015 - Winter 2016',
      'description': 'This project is currently in progress. It will have six mini projects upon completion. I signed up for the Udacity FrontEnd Nanodegree course in order to improve my fundamental understanding of frontend web development, responsive web design, and optimization as well as continuing to work on my HTML, CSS, and Javascript skills. Click on any project for more details.',
      //'images: {'image href': [alt text, CaptionText, LargeImageSRC, liveURL], image href#2 : [ array of values]}
      'images': {
       'images/portfolio_197x142.png': ['Screenshot of Portfolio Home Page', 'Responsive Portfolio Focus:  dynamically sized items, media queries, CSS flexbox, common responsive patterns, breakpoints, optimizing layouts, image sizing.', 'images/portfolio_500x360.png'],

       'images/resume_197x142.png': ['Screenshot of Interactive Resume', 'Interactive Resume Focus: JSON data structures, Javascript (objects, functions, conditionals, and control structures), jQuery, PDF.js, and GoogleMaps API.', 'images/resume_500x360.png'],

       'images/frogger_197x142.png': ['Screenshot of Arcade Game Webpage', 'Arcade Game Focus: Object-Oriented Javascript, scopes and closures, prototype delegation, the parameter "this", functional, prototypal, and pseudoclassical inheritance models, sub/super classes, and HTML5 Canvas.', 'images/frogger_500x360.png', '../3_Project_FEND_Arcadegame/arcade_game.html']
      }
     }, {
      'title': 'Getgo',
      'stack': ['Python', 'Javascript', 'Flask', 'jQuery', 'Ajax', 'Jinja', 'JSON', 'HTML5', 'CSS', 'GoogleMaps API', 'Yelp API', ],
      'url': 'https://getartandgo.herokuapp.com/',
      'dates': 'Fall 2014',
      'description': 'Getgo was my capstone project while attending Hackbright Academy. It was independantly developed in five weeks after five weeks of fullstack web development "bootcamp". I wanted to build an application that allowed a user to find the best bike route to art and wine venues near their current location in Oakland CA. I also wanted to log the user\'s travels for the day and report their adventure back to them. Developer\'s note: An existing address must be entered (201 Orange Street). Click on any image for more details.',
      'images': {
       'images/getgo_197x142.png': ['Screenshot of Getgo Application Home Page', 'I used static open source data from the City of Oakland that documented art installations around the city as well as the Yelp API for a dynamic repository of local galleries and wineries. This is the home page where the user enters their current location.', 'images/getgo_500x360.png'],
       'images/getgo_route_197x142.png': ['Second Screenshot of Getgo Application', 'Once the user enters their location, the browser submits the form to the server as HTTP Get request, the Google geocoder API converts the user address to lat/long coordinantes. Then the app makes two AJAX requests to Flask routes - one calls the Yelp API and passes the lat/long coordinate. The other Flask route calls the static JSON file for City of Oakland. I parse the data that is returned, itterate over it, build information windows, and have pins dropped, then I use the Google API to render directions on user clicks.', 'images/getgo_route_500x360.png'],
       'images/getgo_report_197x142.png': ['Third Screenshot of Getgo Application', 'While the user is clicking locations and the application is rendering directions, these locations are being appended to an array that is accessed when "View Your Stroll" is clicked. The array refreshes when the page refreshes or "Start Over" is clicked.', 'images/getgo_report_500x360.png']
      }
     }, {
      'title': 'Spiritual Corky',
      'stack': ['Python', 'Twitter API'],
      'url': 'https://twitter.com/spiritual_corky',
      'dates': 'Winter 2015',
      'description': 'This project is a Python script run from my Mac terminal. The script generates a random mashup quote from the movies "Waiting for Guffman" and "Jesus Christ Superstar" using <a href = http://setosa.io/blog/2014/07/26/markov-chains/ target = "_blank" class="inline_link">Markov Chains </a>. I use the Twitter API to create the live Twitter feed. Click on the image for more details.',
      'images': {
         'images/corky_197x142.png': ["Screenshot of Twitter Feed for Spiritual Corky", "Basically, a python dictionary is built with the keys being a sequence (tuple) of n words (n is provided as an input argument when the script is run) and the value being word n+1. (If the key already exists, rather than overwrite this key value pair - this value of the key is appended giving the key more than 1 value.) Initially, the script randomly picks a key and pairs it with its value (randomly chosen if more than one exists). This is the 'seed' of the Markov Chain. The script then moves to the second word in that key which becomes the first word in a new key and previous word n+1 is now assigned as the last word of the new key. A value of this key is randomly chosen. After a hardcoded number of cycles, these pairings are concatenated together and tweeted.", 'images/corky_500x360.png']
      }
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
    // Resume PDF using pdf.js Library
    var resumePdf = '<hr><div class="resumePdf flex-box"><a href="../../pdf.js/web/viewer.html" target="_blank">Downloadable Resume</a></div>';
    $("#header").append(resumePdf);
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
    $(".work-entry:last").append(formattedEmployerTitle,formattedLocation,
      formattedDates);

    if (typeof thisJob.description === 'object' ) {
      var formattedDescription = HTMLworkDescription.replace(data, thisJob.description[0]);
      var formattedworkPublication = HTMLworkPublicationStart + HTMLworkPublication.replace("#", thisJob.description[1]).replace(data, thisJob.description[1]);
      $(".work-entry:last").append(formattedDescription, formattedworkPublication);
    } else {
      var formattedDescription = HTMLworkDescription.replace(data, thisJob.description);
      $(".work-entry:last").append(formattedDescription);
    }

  }
};

//Projects via an 'Encapsulating Function'
projects.display = function() {
  var lenProjects = projects.project.length;
  for (var i=0; i < lenProjects; i++ ) {
    var thisProject = projects.project[i];
    $("#projects").append(HTMLprojectStart);

    if (thisProject.url === "NA") {
      var formattedTitle = HTMLprojectTitleNoLink.replace(data, thisProject.title);
      $(".project-entry:last").append(formattedTitle);
    } else {
      var formattedTitle = HTMLprojectTitle.replace(data, thisProject.title)
        .replace("#", thisProject.url);
      var formattedURL = HTMLprojectURL.replace(data, thisProject.url);
      var formattedTitleURL = formattedTitle + formattedURL;
      $(".project-entry:last").append(formattedTitleURL);
    }

    $(".project-entry:last").append(HTMLstackStart);
    var lenStack = thisProject.stack.length;
    for (var j=0; j<lenStack; j++) {
      var separator = (j === (lenStack - 1) ) ? " " : ",  ";
      var formattedStack = HTMLstack.replace(data, thisProject.stack[j]);
      $(".project-entry:last").append(formattedStack + separator);
    }
    var formattedDates = HTMLprojectDates.replace(data, thisProject.dates);
    var formattedDescription = HTMLprojectDescription.replace(data,
      thisProject.description);
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
    //Links to larger image and displays in lightblox when small image is clicked
    var imageLocationLink = $(this).children("img").attr("src");
    for (var i=0; i < lenProjects; i++ ) {
      for (key in projects.project[i].images){
        if (key === imageLocationLink) {
          var imageLocation = projects.project[i].images[imageLocationLink][2];
          $image.attr("src", imageLocation);
          $overlay.show();
        }
      }
    }
    //Locates caption text for clicked image and display as a caption
    var captionLink = $(this).children("img").attr("src"); //linking back to key of images src = href
    for (var i=0; i < lenProjects; i++ ) {
      for (key in projects.project[i].images){
        if (key === captionLink) {
          var captionText = projects.project[i].images[captionLink][1];
          $caption.text(captionText);
          //Add link to project site inside lightbox, if there is one
          if (projects.project[i].images[captionLink].length >= 4) {
            var formattedLightboxURL =  HTMLprojectLightboxURL.replace("#", projects.project[i].images[captionLink][3]);
            $caption.append(formattedLightboxURL);
          }
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
    if (thisSchool.publication != "NA") {
      var formattedschoolPublication = HTMLschoolPublicationStart + HTMLschoolPublication.replace("#", thisSchool.publication).replace(data, thisSchool.publication);
      $(".education-entry:last").append(formattedschoolPublication);

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
