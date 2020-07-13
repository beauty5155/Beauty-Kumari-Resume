$(document).ready(function () {

  //all the code goes here
  //animating developer text
  var count = 0;

  //calling the function to perform animation on developer text
  developer_animation();

  //defining the function
  function developer_animation() {
    //this is the code for animation
    setTimeout(function () {

      //during the first run count == 10 and title == "Developer"
      count++;
      if (count == 1) {
        title = "D";
      } else if (count == 2) {
        title = "De";
      } else if (count == 3) {
        title = "Dev";
      } else if (count == 4) {
        title = "Deve";
      } else if (count == 5) {
        title = "Devel";
      } else if (count == 6) {
        title = "Develo";
      } else if (count == 7) {
        title = "Develop";
      } else if (count == 8) {
        title = "Develope";
      } else if (count == 9) {
        title = "Developer";
      }

      //one last time when count == 9
      if (count != 10) {
        // it helps you put a text on an html element
        $('.title').text(`I'm a ${title}`);

        developer_animation();
      } else if (count == 10) {
        count = 0;
        setTimeout(function () {

          //this will be performed after 1 sec
          designer_animation();
        }, 1000);
      }

    }, 100);
  }
  //animating desinger text
  function designer_animation() {
    setTimeout(function () {
      count++;
      if (count == 1) {
        title = "D";
      } else if (count == 2) {
        title = "De";
      } else if (count == 3) {
        title = "Des";
      } else if (count == 4) {
        title = "Desi";
      } else if (count == 5) {
        title = "Desig";
      } else if (count == 6) {
        title = "Design";
      } else if (count == 7) {
        title = "Designe";
      } else if (count == 8) {
        title = "Designer";
      }

      if (count != 10) {
        $('.title').text(`I'm a ${title}`);
        designer_animation();
      } else if (count == 10) {
        count = 0;
        setTimeout(function () {
          developer_animation();
        }, 1000);
      }
    }, 100);
  }

  //adding effect to see resume button
  $('.see_resume').mouseenter(function () {
    $(this).css('background-color', 'yellow');
  })
  $('.see_resume').mouseleave(function () {
    $(this).css('background-color', 'yellowgreen');
  })

  //performing animation on elements in html 
  animate_names();
  function animate_names() {

    setTimeout(function () {

      //animating java title

      $(".java_name").animate({ fontSize: "+=20px" }, 500);
      $(".java_name").animate({ letterSpacing: "+=10px" }, 1000);

      //javascript title
      $(".js_name").animate({ fontSize: "+=20px" }, 500);
      $(".js_name").animate({ letterSpacing: "+=10px" }, 1000);

      //angular title
      $(".angular_name").animate({ fontSize: "+=20px" }, 500);
      $(".angular_name").animate({ letterSpacing: "+=10px" }, 1000);

      setTimeout(function () {
        $(".java_name").animate({ fontSize: "-=20px" }, 500);
        $(".java_name").animate({ letterSpacing: "-=10px" }, 1000);

        $(".js_name").animate({ fontSize: "-=20px" }, 500);
        $(".js_name").animate({ letterSpacing: "-=10px" }, 1000);

        $(".angular_name").animate({ fontSize: "-=20px" }, 500);
        $(".angular_name").animate({ letterSpacing: "-=10px" }, 1000);
        animate_names();

      }, 4000);
    }, 2000);
  }

  $(".project_name").text("Project Development");
  $(".project_content").text("Project development is the process and the facility of planning, organizing, coordinating, and controlling the resources to accomplish specific goals. The process takes a transportation improvement from concept through construction.")
  var project_count = 1;

  $(".next").click(function () {
    if (project_count == 4) {
      project_count = 0;
    }
    project_count++;
    $(".actual_img").attr("src", "images/project_" + project_count + ".jpg")

    if (project_count == 1) {
      $(".project_name").text(" Project Development");
      $(".project_content").text("Project development is the process and the facility of planning, organizing, coordinating, and controlling the resources to accomplish specific goals. The process takes a transportation improvement from concept through construction.")  
    }
    else if (project_count == 2) {
      $(".project_name").text(" Project Management");
      $(".project_content").text("Project management is the practice of leading the work of a team to achieve goals and meet success criteria at a specified time. The primary challenge of project management is to achieve all of the project goals within the given constraints.")
    }
    else if (project_count == 3) {
      $(".project_name").text("Data Analysis");
      $(".project_content").text("Data analysis is a process of inspecting, cleansing, transforming and modeling data with the goal of discovering useful information, informing conclusions and supporting decision-making.");
    }
    else if (project_count == 4) {
      $(".project_name").text("Web Application Development");
      $(".project_content").text("Description Web application development is the process and practice of developing web applications. There is a consensus that the processes involved are extensions of standard software engineering processes.");
    }
  });

  $(".prev").click(function () {
    if (project_count == 1) {
      project_count = 5;
    }
    project_count--;
    $(".actual_img").attr("src", "images/project_" + project_count + ".jpg")

    if (project_count == 1) {
      $(".project_name").text("Project Development");
      $(".project_content").text("Project management is the practice of leading the work of a team to achieve goals and meet success criteria at a specified time. The primary challenge of project management is to achieve all of the project goals within the given constraints.")
    }
    else if (project_count == 2) {
      $(".project_name").text("Project Management");
      $(".project_content").text("Project management is the practice of leading the work of a team to achieve goals and meet success criteria at a specified time. The primary challenge of project management is to achieve all of the project goals within the given constraints.")
    }

    else if (project_count == 3) {
      $(".project_name").text("Data Analysis");
      $(".project_content").text("Data analysis is a process of inspecting, cleansing, transforming and modeling data with the goal of discovering useful information, informing conclusions and supporting decision-making.");
    }

    else if (project_count == 4) {
      $(".project_name").text("Web Application Development");
      $(".project_content").text("DescriptionWeb application development is the process and practice of developing web applications. There is a consensus that the processes involved are extensions of standard software engineering processes.");
    }
  });
});

animate_names();
function animate_names() {

  setTimeout(function () {

    //tenth title

    $(".X_name").animate({ fontSize: "+=30px" }, 500);
    $(".X_name").animate({ letterSpacing: "+=15px" }, 1000);

    //twelfth title
    $(".XII_name").animate({ fontSize: "+=30px" }, 500);
    $(".XII_name").animate({ letterSpacing: "+=15px" }, 1000);

    //bca title
    $(".bca_name").animate({ fontSize: "+=30px" }, 500);
    $(".bca_name").animate({ letterSpacing: "+=15px" }, 1000);

    setTimeout(function () {
      $(".X_name").animate({ fontSize: "-=30px" }, 500);
      $(".X_name").animate({ letterSpacing: "-=15px" }, 1000);

      $(".XII_name").animate({ fontSize: "-=30px" }, 500);
      $(".XII_name").animate({ letterSpacing: "-=15px" }, 1000);

      $(".bca_name").animate({ fontSize: "-=30px" }, 500);
      $(".bca_name").animate({ letterSpacing: "-=15px" }, 1000);
      animate_names();

    }, 4000);
  }, 2000);
}