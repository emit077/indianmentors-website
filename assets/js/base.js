$(document).ready(function () {
  let $NAVBAR = $("#app-navbar");
  let $FOOTER = $("#app-footer");

  $NAVBAR.html(` 
  <div class="d-none d-md-inline">
  <nav class="navbar navbar-expand-lg navbar-light app-padding pt-3">
    <div class="collapse navbar-collapse" id="navbarScroll">
      <div
        class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
        style="--bs-scroll-height: 100px;"
      >
        <a class="navbar-brand" href="../../pages/home/">
            <img
            src="../../assets/images/logo/Indianmentors-logo-blue.png"
            alt=""
            width="300px"/>
        </a>
      </div>
      <div class="d-flex">
        <div class="pr-5">
          <div class="d-inline-flex v-middle">
            <div class="align-self-center px-2">
              <span class="mdi mdi-phone icon"></span>
            </div>
            <div>
              <p class="nav-text">Call</p>
              <p>+91 8305050674</p>
            </div>
          </div>
        </div>
        <div class="px-5">
          <div class="d-flex">
            <div class="align-self-center px-2">
              <span class="mdi mdi-clock-time-five icon"></span>
            </div>
            <div>
              <p class="nav-text">Work Time</p>
              <p>Mon - Fri 8AM - 8PM</p>
            </div>
          </div>
        </div>
        <div class="pl-5">
          <div class="d-flex">
            <div class="align-self-center px-2">
              <span class="mdi mdi-map-marker icon"></span>
            </div>
            <div>
              <p class="nav-text">Address</p>
              <p>Bhilai, Chhattishgarh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <header id="app-header" class="sticky-top app-padding bg-white pb-3">
    <hr />
    <div
      class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
    >
      <ul
        class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
      >
        <li class="nav-item">
          <a class="nav-link active-nav-link px-0 me-5" href="../home/"
            >Home</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link px-0 me-5" href="../about/">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-0 me-5" href="../contact/">Contact Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-0 me-5" href="../career/">Career</a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-0 me-5" href="../faq/">FAQs</a>
        </li>
      </ul>
      <v-btn class="primary-action-btn" style="--padding: 10px 20px;">
        Login
      </v-btn>
    </div>
  </header>
  </div>
`);

  $FOOTER.html(` 
  <div class="row justify-content-center py-3 px-5 g-0">
  <div class="col-sm-12 col-md-6 px-sm-2 px-md-5">
    <div class="pb-4">
    <a class="navbar-brand" href="../../pages/home/">
      <img
        src="../../assets/images/logo/Indianmentors-logo-blue.png"
        alt=""
        width="300px"
      />
      </a>
    </div>

    Indian Mentors is an educational service provider that offers highly
    qualified tutors and mentors to enhance students' performance. The
    child, parent, and teacher must collaborate effectively. We provide
    education that aligns with technological advancements and
    globalization. <br/><br/> The enterprise is owned and operated by Afrisha Indian
    Mentors Pvt Ltd
    <hr />
    <h5 class="mt-4">Follow Us</h5>
    <div class="social-icons my-4">
      <a
        class="text-decoration-none me-1"
        href="https://www.instagram.com/indianmentors/"
        target="_blank"
        ><span class="mdi mdi-instagram"></span
      ></a>
      <a class="text-decoration-none me-1" href="https://www.facebook.com/indianmentors" target="_blank"
        ><span class="mdi mdi-facebook"></span
      ></a>
      <a class="text-decoration-none me-1" href="https://www.linkedin.com/company/indianmentors/" target="_blank"
        ><span class="mdi mdi-linkedin"></span
      ></a>
      <a class="text-decoration-none me-1" href="https://www.youtube.com/channel/UCwZbfBmijkVQDnsQmKhc_-A" target="_blank"
        ><span class="mdi mdi-youtube-play"></span
      ></a>
      <a class="text-decoration-none me-1" href="https://twitter.com/i/flow/login?redirect_after_login=%2Findian_mentors" target="_blank"
        ><span class="mdi mdi-twitter"></span
      ></a>
    </div>
  </div>
  <div class="col-sm-12 col-md-2 ps-sm-2 ps-md-5">
    <h5 class="my-3">Quick Links</h5>
    <ul class="footer-nav-item ps-1">
      <li class="py-2"><a href="../home/">Home</a></li>
      <li class="py-2"><a href="../about/">About Us</a></li>
      <li class="py-2"><a href="../contact/">Contact Us</a></li>
      <li class="py-2"><a href="../career/">Career</a></li>
      <li class="py-2"><a href="../faq/">FAQs</a></li>
      <li class="py-2"><a href="../privacyPolicy/">Privacy Policy</a></li>
      <li class="py-2"><a href="../terms/">Term & Condition</a></li>
    </ul>
  </div>
  <div class="col-sm-12 col-md-4 px-sm-2 px-md-5">
    <h5 class="my-3">Contact Us</h5>
    <p class="pb-3">
      <strong>Address : </strong>
      32/A, Near Avantibai Chowk, Beside Dubey Dairy, Junwani Road, Kohka,
      Bhilai, Durg Chhattisgarh 490023
    </p>
    <p class="pb-3">
      <strong>Email : </strong>
      indianmentors.in@gmail.com
    </p>
    <p class="pb-3">
      <strong>Call : </strong>
      <span> +91 7389563564</span>,
      <span> +91 7869027983</span>
    </p>
  </div>
</div>
<div class="text-center py-4 small">
  Copyright © Indian Mentors 2024 All rights reserved
</div>
<div class="developer-credit text-center py-3">
  Design & Developed with ❤️ by
  <a href="https://emit077.github.io/" target="_blank" style="color: inherit;"
    >Amit Sahu</a
  >
</div>
  `);
});
