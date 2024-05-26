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
      let data = [50000, 100000, 100];
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
                now = Number(Math.ceil(now)).toLocaleString("inr");
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
        "In the comfort of your own homes, the program provides students with customised academic support together with mentoring and individualised attention.",
      img_url: "../../assets/images/service/service-1.png",
    },
    {
      title: "Private Online Tutors",
      subtitle:
        "Students can engage with specialists in a variety of areas and specialties thanks to the availability of teachers from various geographical regions.",
      img_url: "../../assets/images/service/service-2.png",
    },
    {
      title: "Tuition Centre",
      subtitle:
        "Learning in a classroom tuition facility or other controlled setting offers the chance to work in groups and pick up skills from classmates.",
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
      subtitle: `Connect with our friendly team through a phone call or online form. Share your needs and ask any questions about our courses and services. We'll provide all the information you need to make the best decision for your learning journey. You can also reach out to our team via email or live chat on our website.`,
    },
    {
      step_no: 2,
      step_color: "#CB60FF",
      title: "Registration",
      subtitle: `Once you've chosen the perfect course, complete the registration process and pay the fees securely online. Our registration process is very simple. Our team will guide you through each step, ensuring a smooth onboarding experience. We offer a variety of payment options for the registration fees to accommodate your preferences.`,
    },
    {
      step_no: 3,
      step_color: "#F34B7E",
      title: "Demo Classes",
      subtitle: `Try our free 90-minute demo class online or at our center. If the teacher isn't a fit, no problem—we'll quickly find another who suits your needs. Attending a demo session allows you to get a firsthand experience of our teaching style, curriculum, and the expertise of our teachers.`,
    },
    {
      step_no: 4,
      step_color: "#FCB01D",
      title: "Fee Structure",
      subtitle:
        "We have different plans to choose from: basic, standard, and premium. After you find the perfect teacher, pick the plan that works best for you and decide how many classes you want each week. Once you pay the fees in advance, you can start your regular classes.",
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
      sub_title: "Parent, Bhilai, Chhattisgarh",
      text: `I would advise all parents not to wait until the end of the term to start preparing their children for exams. Instead, start tutoring them from the beginning. We are pleased with the quality of service provided by the tutors.`,
      img_url: "",
    },
    {
      name: "Abhishek Toppo",
      sub_title: "Parent, Bhilai, Chhattisgarh",
      text: `Indian mentors and tutors are experienced and friendly. Their teaching style is excellent. I highly recommend others to take classes from Indian Mentors.`,
      img_url: "",
    },
    {
      name: "Bhagya Laxmi",
      sub_title: "Parent, Bilaspur, Chhattisgarh",
      text: "I can't even express my happiness after seeing my daughter's results. I had almost lost hope in her studies, but after enrolling her in Indian Mentors, I saw significant improvements in her academic performance. This has restored my faith in her abilities, and I highly recommend this institute. Thank you, Indian Mentors!",
      img_url: "",
    },
    {
      name: "Anushka Swaroop",
      sub_title: "Parent, Bhilai, Chhattisgarh",
      text: "Indian Mentors is an excellent institute that provides highly qualified tutors to mentor students. It is one of the top institutes in Chattisgarh.",
      img_url: "",
    },
    {
      name: "Harsh Soni",
      sub_title: "Tutor, Bhilai, Chhattisgarh",
      text: "Can't express my experience in words. Just want to say that this place is awesome. It's been more than one year and I'm still convinced of the amount of dedication and discipline they have.",
      img_url: "",
    },
    {
      name: "Jyothy Nair",
      sub_title: "Parent, Durg, Chhattisgarh",
      text: "The classes are excellent, and the teachers explain all the concepts from our perspective. I highly recommend them!",
      img_url: "",
    },
    {
      name: "Nisar Ahmed",
      sub_title: "",
      text: "Had a great experience teaching classes to my younger brother. Highly recommended. The environment is pleasant, and the team members are cooperative and supportive.",
      img_url: "",
    },
    {
      name: "Shabaz",
      sub_title: "",
      text: "Friendly environment. Visited here frequently. It is good to see that this institution is also working for the deprived section. Would love to partner with this institute.",
      img_url: "",
    },
    {
      name: "Learning Zone",
      sub_title: "",
      text: "Great place for learning. Wonderful environment, understanding teachers, friendly staff, and a down-to-earth director. A must-visit for classes",
      img_url: "",
    },
    {
      name: "Ruchi Chanda",
      sub_title: "",
      text: "One of the best institutes in the Bhilai-Durg region, Indian Mentors, is a renowned brand. I am proud to be a part of this organization, thanks to the pleasant environment and the cooperative and supportive team members.",
      img_url: "",
    },
    {
      name: "Ashish Sahu",
      sub_title: "",
      text: "The teacher is excellent, provides high-quality instruction, and interacts nicely with the children. My child's progress is satisfactory.",
      img_url: "",
    },
    {
      name: "Nandita Vishwakarma",
      sub_title: "",
      text: "Best Institute providing quality education with professional mentors. Great experience with Indian mentors!",
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
      <div class="testimonial-cards  pb-5">
        <div class="d-flex align-items-center"> ${item.text}
        </div>
      </div>
      <div class="text-center profile-wrapper ">
        <img class="user-profile-img shadow" src="../../assets/images/testimonia/testimonial.jpg" alt="" />
        <h5 class="mt-2 mb-0"> ${item.name}</h5>
        <small>${item.sub_title}</small> 
      </div>
    </div>
  </div>`
    );
  });
});
