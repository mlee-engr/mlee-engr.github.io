---
permalink: /
title: Homepage
author_profile: true
redirect_from:
  - /about/
  - /about.html
layout: archive
---

{% include work-in-progress.html %}

<!-- ===== About Me Section ===== -->

<div class="home-section-box">

  <div class="home-section-grid">

    <!-- Text -->
    <div class="home-section-text">

      <h1>About me</h1>

      <p>
        Mechanical Engineering graduate from Northwestern University and incoming
        M.S. Mechanical Engineering student at Colorado School of Mines (Fall 2027).
        Originally, I was admitted to Mines for the Fall 2026 term, but I decided to
        formally defer my offer to focus on gaining real-world engineering experience
        and to save up for grad school expenses.
      </p>

      <p>
        Currently, I am an Engineering Co-op at Entegris, where I work with metrology
        and quality engineers in the semiconductor manufacturing industry. My
        long-term goal is to work in aerospace, particularly in propulsion, test,
        or systems engineering roles.
      </p>

      <p>
        I am actively seeking Spring and Summer 2027 engineering internships in
        design, manufacturing, and test engineering to familiarize myself with
        different stages of the product development process
        (design &amp; prototyping → manufacturing at scale → quality assurance).
      </p>

    </div>


    <!-- Right Carousel -->
    <div class="photo-carousel">

      <div class="carousel-slide active">
        <img
          src="/images/about.md/clean_room.png"
          alt="Clean room"
        >
        <p class="carousel-caption">
          Me in an ISO 7 clean room
        </p>
      </div>

      <div class="carousel-slide">
        <img
          src="/images/about.md/graduate.png"
          alt="Graduation"
        >
        <p class="carousel-caption">
          In Chicago after graduation (June 2025)
        </p>
      </div>

      <div class="carousel-slide">
        <img
          src="/images/about.md/L1-rocket.png"
          alt="L1 rocket"
        >
        <p class="carousel-caption">
          Level 1 High Power Rocket Launch! (April 2023)
        </p>
      </div>

      <div class="carousel-slide">
        <img
          src="/images/about.md/vietnam.png"
          alt="Vietnam"
        >
        <p class="carousel-caption">
          Northern Vietnam (July 2023)
        </p>
      </div>

      <button
        class="carousel-prev"
        onclick="changeSlide(-1)"
        aria-label="Previous photo"
      >
        &#10094;
      </button>

      <button
        class="carousel-next"
        onclick="changeSlide(1)"
        aria-label="Next photo"
      >
        &#10095;
      </button>

    </div>

  </div>

</div>


<!-- ===== Right Carousel JavaScript ===== -->

<script>
let currentSlide = 0;

const slides = document.querySelectorAll(
  '.photo-carousel .carousel-slide'
);

function showSlide(index) {

  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  slides[currentSlide].classList.add('active');
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}
</script>


<!-- ===== Why Should You Hire Me Section ===== -->

<div class="home-section-box">

  <div class="home-section-grid reverse">

    <!-- Left Carousel -->
    <div class="photo-carousel-left">

      <div class="carousel-slide-left active">
        <img
          src="/images/my-projects/rig-v3.png"
          alt="Mining rig"
        >
        <p class="carousel-caption-left">
          Crypto mining rig I helped design & build, earning a profit of ~$2.5k
        </p>
      </div>

      <div class="carousel-slide-left">
        <img
          src="/images/about.md/gearbox.png"
          alt="Gearbox"
        >
        <p class="carousel-caption-left">
          Gear reducer project involving fatigue & yield analysis and building CAD models in Siemens NX
        </p>
      </div>

      <div class="carousel-slide-left">
        <img
          src="/images/about.md/ansys.png"
          alt="Fluent CFD simulation"
        >
        <p class="carousel-caption-left">
          Fluent CFD simulation exploring gaseous mixing
        </p>
      </div>

      <button
        class="carousel-prev-left"
        onclick="changeSlideLeft(-1)"
        aria-label="Previous photo"
      >
        &#10094;
      </button>

      <button
        class="carousel-next-left"
        onclick="changeSlideLeft(1)"
        aria-label="Next photo"
      >
        &#10095;
      </button>

    </div>


    <!-- Text -->
    <div class="home-section-text">

      <h1>Why should you hire me?</h1>

      <p>
        I'm not becoming an engineer because I want to sit behind a screen all day.
        I love designing things, but I get the most satisfaction from seeing those
        designs come to life—whether that's through machining, assembly, testing,
        or troubleshooting. I don't want to just design one piece and hand it off—I
        want to be involved in the journey of turning an idea into something that
        actually works.
      </p>

      <p>
        For me, learning by immersion and actually encountering problems head-on
        beats studying a textbook front to back any day. 
      </p>

      <p>
        Please connect with me at
        <a
          href="mailto:michael_lee1@mines.edu"
          style="color: rgb(73, 78, 82) !important; text-decoration: none;"
        >
          <strong>michael_lee1@mines.edu</strong>
        </a>
        or
        <a
          href="mailto:mlee.engr@proton.me"
          style="color: rgb(73, 78, 82) !important; text-decoration: none;"
        >
          <strong>mlee.engr@proton.me</strong>
        </a>
      </p>

    </div>

  </div>

</div>


<!-- ===== Left Carousel JavaScript ===== -->

<script>
let currentSlideLeft = 0;

const slidesLeft = document.querySelectorAll(
  '.photo-carousel-left .carousel-slide-left'
);

function showSlideLeft(index) {

  if (index >= slidesLeft.length) {
    currentSlideLeft = 0;
  } else if (index < 0) {
    currentSlideLeft = slidesLeft.length - 1;
  } else {
    currentSlideLeft = index;
  }

  slidesLeft.forEach(slide => {
    slide.classList.remove('active');
  });

  slidesLeft[currentSlideLeft].classList.add('active');
}

function changeSlideLeft(direction) {
  showSlideLeft(currentSlideLeft + direction);
}
</script>