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
      <a href="https://app.indianmentors.in/student/registration" target="_blank" style="text-decoration:none">
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
        </a>
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
      step_color: "#0dccc2",
      title: "Meeting",
      subtitle: `We require precise details regarding the student's needs. You can either visit our office, or our admission counsellor can arrange a meeting with you, either online or in person, to provide counselling for the student. We will gather all necessary information, including class, subjects, timing, preferred tutor, location, city, demo details, and any specific concerns.`,
    },
    {
      step_no: 2,
      step_color: "#CB60FF",
      title: "Registration",
      subtitle: `After communicating your requirements, the next step is to complete the student registration process by filling out the registration form and submitting the one-time registration fee of Rs. 1000. This fee is non-refundable and non-adjustable, and it grants lifetime access to our services. You can complete this process on our website following the provided instructions.`,
    },
    {
      step_no: 3,
      step_color: "#F34B7E",
      title: "Demo Classes",
      subtitle: `The tutor will conduct a demo session, either online or in person for one and a half hours. Following the demo session, you will need to confirm whether the tutor is suitable for the student's needs. If the tutor is a good fit, that's wonderful. If not, we will arrange for another tutor promptly.`,
    },
    {
      step_no: 4,
      step_color: "#FCB01D",
      title: "Fee Structure",
      subtitle:
        "We offer various plans and packages to cater different needs. Once you have selected your tutor, you can choose from our basic, standard, or premium plans and select the number of days per week according to your requirements. You can then begin your classes on a regular basis and access all our services after making an advance fee payment.",
    },
  ];

  step_List.forEach((step) => {
    $("#stepItemContainer").append(
      `<div class="col-sm-12 col-md-6  p-md-5 py-4">
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

  // testimonial

  testimonial_List = [
    {
      name: "Amitesh Singh",
      text: "I will suggest every parent to not burden their children at the end of the session for exams. Take classes from them from the very beginning. Their service is up to the mark and we are satisfied with their tutors and their service.",
      img_url: "",
    },
    {
      name: "Abhishek Toppo",
      name: "Indian mentors tutors are experienced and friendly. Their way of teaching is very good. I would really suggest others to take classes from Indian Mentors.",
      img_url: "",
    },
    {
      name: "Bhagya Laxmi",
      text: "I even can't express my happiness after seeing my daughter's results I almost lost hope in her studies but after I appointed Indian Mentors I saw changes in her academic results which made me believe in her results again now I can highly recommend this institute Thank you Indian Mentors",
      img_url: "",
    },
    {
      name: "Anushka Swaroop",
      text: "Indian Mentors is a good institute we provide the best and most qualified tutors for mentoring the performance of the students it's among the best institutes of Chattisgarh.",
      img_url: "",
    },
    {
      name: "Harsh Soni",
      text: "Can't express my experience in words. Just wanna say that this place is Awesome. It's been more than one year and I'm still convinced with the amount of dedication and descipline they have.",
      img_url: "",
    },
    {
      name: "Jyothy Nair",
      text: "The classes are very good and the teachers are explaining all the concepts for Our Own POV HIGHLY RECOMMEND THEM !!!!",
      img_url: "",
    },
    {
      name: "Nisarahmed Nadaf",
      text: "Had a good experience while taking classes for my younger brother. totally recommended. seen people attacking this institute by taking money from competitive institutes to damage the reputation",
      img_url: "",
    },
    {
      name: "Shabaz",
      text: "Friendly environment. Visited here frequently. It is good to see that this institution is also working for the deprived section. Would love to partner with this institute.",
      img_url: "",
    },
    {
      name: "Learning Zone",
      text: "Great place for learning.... Wonderful environment understanding teacher, friendly staff and down to earth Director.... Must visit for classes....",
      img_url: "",
    },
  ];

  testimonial_List.forEach((item, i) => {
    $("#testimonialContainer").append(
      `  <div class="carousel-item  px-md-5 px-0 ${
        i == 0 ? "active" : ""
      }" data-bs-interval="2000">
    <div>
      <img class="quote-icon" src="../../assets/icons/quotes.svg" alt="" />
      <div class="testimonial-cards ">
        <div class="d-flex align-items-center"> ${item.text}
        </div>
      </div>
      <div class="text-center profile-wrapper ">
        <img class="user-profile-img shadow" src="../../assets/images/testimonia/testimonial.jpg" alt="" />
        <h5 class="mt-2"> ${item.name}</h5>
      </div>
    </div>
  </div>`
    );
  });
});
