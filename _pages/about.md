---
permalink: /
title: Homepage
author_profile: true
redirect_from:
  - /about/
  - /about.html
layout: archive
---
___

<div class="wip-box">
  <div class="wip-label">WORK IN PROGRESS</div>
  <div class="wip-content">
    This site is still a work in progress, but I decided to publish it as I build. The engineering process is rarely as clean as the finished product a consumer sees.
  </div>
</div>

<div class="photo-carousel">


  <div class="carousel-slide active">
    <img src="/images/about.md/clean_room.png" alt="Clean room">
    <p class="carousel-caption">Working in a clean room (ISO 7) @ Entegris (August 2026) </p>
  </div>

  <div class="carousel-slide">
    <img src="/images/about.md/graduate.png" alt="Graduation">
    <p class="carousel-caption">In Chicago after graduation (June 2025)</p>
  </div>
  
  <div class="carousel-slide">
    <img src="/images/about.md/L1-rocket.png" alt="L1 rocket">
    <p class="carousel-caption">Level 1 High Power Rocket Launch! (April 2023)</p>
  </div>
  
  <div class="carousel-slide">
    <img src="/images/about.md/vietnam.png" alt="Vietnam">
    <p class="carousel-caption">Northern Vietnam (July 2023)</p>
  </div>




  <button class="carousel-prev" onclick="changeSlide(-1)">&#10094;</button>
  <button class="carousel-next" onclick="changeSlide(1)">&#10095;</button>

</div>

<script>
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;

  slides.forEach(slide => slide.classList.remove('active'));
  slides[currentSlide].classList.add('active');
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}
</script> 
# About me
Mechanical Engineering graduate from Northwestern University and incoming M.S. Mechanical Engineering student at Colorado School of Mines (Fall 2027). Originally, I was admitted to Mines for the Fall 2026 term, but I decided to formally defer my offer to focus on gaining real-world engineering experience and to save up for grad school expenses.
  
Currently, I am a Engineering Co-op at Entegris, where I work with metrology and quality engineers in the semiconductor manufacturing industry. My long-term goal is to work in aerospace, particularly in propulsion, test, or systems engineering roles.  

I am actively seeking Spring and Summer 2027 engineering internships in design, manufacturing, and test engineering to familiarize myself with different stages of the product development process (design & prototyping -> manufacturing at scale -> quality assurance).
<br>
<hr style="margin: 2em 0;">

<div class="photo-carousel-left">

  <div class="carousel-slide-left active">
    <img src="/images/about.md/mining-rig.png" alt="Mining rig">
    <p class="carousel-caption-left">Mining rig</p>
  </div>

  <div class="carousel-slide-left">
    <img src="/images/about.md/ansys.png" alt="ANSYS">
    <p class="carousel-caption-left">ANSYS</p>
  </div>

  <div class="carousel-slide-left">
    <img src="/images/about.md/gearbox.png" alt="Gearbox">
    <p class="carousel-caption-left">Gearbox</p>
  </div>

  <button class="carousel-prev-left" onclick="changeSlideLeft(-1)" aria-label="Previous photo">
    &#10094;
  </button>

  <button class="carousel-next-left" onclick="changeSlideLeft(1)" aria-label="Next photo">
    &#10095;
  </button>

</div>

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
# Why should you hire me?
I'm not becoming an engineer because I want to sit behind a screen all day. I love designing things, but I get the most satisfaction from seeing those designs come to life—whether that's through machining, assembly, testing, or troubleshooting. I don't want to just design one piece and hand it off—I want to be involved in the journey of turning an idea into something that actually works.

For me, learning by immersion in by actually encountering problems head-on beats studying a textbook front to back any day. For example, CMM fixturing.
  
Please connect with me at <a href="mailto:michael_lee1@mines.edu" style="color: rgb(73, 78, 82) !important; text-decoration: none;"><strong>michael_lee1@mines.edu</strong></a> or <a href="mailto:mlee.engr@proton.me" style="color: rgb(73, 78, 82) !important; text-decoration: none;"><strong>mlee.engr@proton.me</strong></a>


<style>
.gallery {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin: 0 auto;
    max-width: 600px;
}
.gallery img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}
.gallery img:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}
</style>

