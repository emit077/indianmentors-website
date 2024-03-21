$(document).ready(function () {
  const myCarouselElement = document.querySelector("#testimonialCarousel");
  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 200,
    touch: false,
  });

  /* counter effect*/
  let isVisited = false;
  window.addEventListener("scroll", (event) => {
    if (!isVisited && isOnScreen(document.getElementById("feature-stats"))) {
      isVisited = true;
      let data = [20000, 10000, 50];
      $(".counting").each(function (i) {
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: data[i],
            },
            {
              duration: 1200,
              easing: "swing",
              step: function (now) {
                now = Number(Math.ceil(now)).toLocaleString("en");
                $(this).text(now);
              },
            }
          );
      });
    } else if (!isOnScreen(document.getElementById("feature-stats")))
      isVisited = false;
  });
});

function isOnScreen(element) {
  let y = element.offsetTop;
  let h = element.offsetHeight;
  let sh = $(window).height();
  let st = $(window).scrollTop();
  return y < sh + st && y > st - h;
}

$("#testimonialCarousel").ready(function () {
  // setInterval(function () {
  $("#testimonialCarousel .carousel-control-next").click();
  // }, 1000);

  // const myCarouselElement = document.querySelector("#testimonialCarousel");
  // const carousel = new bootstrap.Carousel(myCarouselElement, {
  //   interval: 200,
  //   touch: false,
  // });
});

//
$(document).ready(function () {
  let program_list = [
    {
      title: "Nursery to 5th",
      subtitle: "All Subjects",
      img_url: "../../assets/images/program/1.png",
    },
    {
      title: "6th to 8th",
      subtitle: "All Subjects",
      img_url: "../../assets/images/program/2.png",
    },
    {
      title: "9th & 10th",
      subtitle: "All Subjects",
      img_url: "../../assets/images/program/4.png",
    },
    {
      title: "11th & 12th",
      subtitle: "All Subjects",
      img_url: "../../assets/images/program/5.png",
    },
    {
      title: "School Entrance",
      subtitle: "Navodaya, Sainik, RMS, RIMC",
      img_url: "../../assets/images/program/3.png",
    },
    {
      title: "College Entrance",
      subtitle: "JEE, NEET, PMT, PPHT, PET, CA, CMA, CS, ACCA",
      img_url: "../../assets/images/program/6.png",
    },
    {
      title: "Competitive Exams",
      subtitle: "NTSE, KVPY & Olympiad",
      img_url: "../../assets/images/program/7.png",
    },
    {
      title: "Spoken English & Personality Development",
      subtitle: "",
      img_url: "../../assets/images/program/8.png",
    },
  ];
  program_list.forEach((program) => {
    $("#programsCardContainer").append(
      `<div class="col-sm-12 col-md-3 p-3">
        <div class="card border-1 h-100 rounded-5 shadow">
          <img src="${program.img_url}" alt="" class="rounded-top-5">
          <div class="card-body text-center pt-3 text-white bg-primary justify-content-center rounded-bottom-5 d-flex" style="align-items: center !important;" >
          <div>
            <h4 class="card-title">
              ${program.title}
            </h4>
            <p class="small pb-2">${program.subtitle}</p>
          </div>  
           <!-- <a href="#" class="primary-action-btn" style="--padding: 8px 20px;">
            Enroll now
            </a> -->
          </div>
        </div>
      </div>`
    );
  });

  let service_list = [
    {
      title: "Private Home Tutors",
      subtitle:
        "Provides personalized academic support to students in the comfort of their own homes,  academic support, personalized attention, and mentorship to students",
      img_url: "../../assets/images/service/service-1.png",
    },
    {
      title: "Private Online Tutors",
      subtitle:
        "Provides access to a wide range of tutors from different geographic locations, allowing students to work with experts in various subjects and specialties.",
      img_url: "../../assets/images/service/service-2.png",
    },
    {
      title: "Classroom Tutoring ",
      subtitle:
        "Takes place in a structured learning environment, such as a classroom or educational center, the opportunity to learn from their peers, collaborate on group activities",
      img_url: "../../assets/images/service/service-3.png",
    },
  ];

  service_list.forEach((service) => {
    $("#serviceCardContainer").append(
      `<div class="col-sm-12 col-md-4 p-3"  style="z-index: 10;">
        <div class="card border-1 h-100 rounded-5 shadow">
          <img src="${service.img_url}" alt="" class="mt-3">
          <div class="card-body text-center pt-3 justify-content-center rounded-bottom-5 d-flex" style="align-items: center !important;" >
          <div class="px-1">
            <h4 class="card-title text-primary font-robot-slab"> ${service.title}</h4>
            <p class=" pb-2">${service.subtitle}</p>
          </div>  
          <!-- <a href="#" class="primary-action-btn" style="--padding: 8px 20px;">
            Enroll now
            </a> -->
          </div>
        </div>
    </div>`
    );
  });

  step_List = [
    {
      step_no: 1,
      step_color:"#0dccc2",
      title: "Initial Consultation & Matching Process",
      subtitle: `Begins with an initial consultation between the company
      and the student or their parents to gather information
      about their academic needs, goals, schedule, and preferred
      learning style. After that based on the information
      gathered during the consultation, the company matches the
      student with a suitable tutor from their pool of qualified
      educators.`,
    },
    {
      step_no: 2,
      step_color:"#CB60FF",
      title: "Introduction and Scheduling",
      subtitle: `Once a suitable tutor is selected, the home tuition
      company introduces the tutor to the student or their
      parents. They discuss the tutoring plan, including the
      frequency and duration of sessions and fees.`,
    },
    {
      step_no: 3,
      step_color:"#F34B7E",
      title: " Feedback and Adjustments",
      subtitle: `Based on the feedback received from the student, parents, and tutor, the home tuition company may make adjustments to the tutoring plan as needed.`,
    },
    {
      step_no: 4,
      step_color:"#FCB01D",
      title: "Evaluation of Class",
      subtitle: "Assessment of class through attendance and real-time location tracking.",
    },
  ];

  step_List.forEach((step) => {
    $("#stepItemContainer").append(
      `<div class="col-sm-12 col-md-6 p-5">
      <div class="card h-100 px-3">
        <div  style="--bg-color: ${step.step_color}"  class="step-circle text-center font-roboto-slab pt-1">
          ${step.step_no}
        </div>
        <div class="card-body text-center pb-4 pt-0">
          <h5 class="card-title font-roboto-slab mb-4"> ${step.title} </h5>
          <p class="card-text"> ${step.subtitle} </p>
        </div>
      </div>
    </div>`
    );
  });
});
