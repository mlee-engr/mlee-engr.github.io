---
title: "Cryptocurrency (ETH) Mining Rig"
permalink: /my-projects/crypto-eth-rig/
layout: custom-full-width
---
<div class="home-section-box">

  <div class="home-section-grid">

    <!-- Text -->
    <div class="home-section-text">
        <h1> Background </h1>
        <p>
        In 2021, Ethereum (ETH), the second-ranked cryptocurrency in terms of market cap experienced a <a href="https://www.cnbc.com/2021/02/18/nvidia-cryptocurrency-mining-processor-for-ether-announced.html"> GPU mining boom</a>. Fresh out of high school and working our first jobs, I proposed to a friend about getting in on this "gold rush" by building our own mining rig. As I did not have the money at the time, I offered to help pick out parts, design, and build the system while they supplied the capital.    
        </p>

        <h1> Final System Specifications</h1>
        <p>
            <ul>
                <li>Total cost of ~ $5,000 (including GPUs, auxiliary parts and cables, and mining rig frame)</li>
                <li>All GPUs below danger zone temperature of >75°C via optimal placement </li>
                <li>Total profit of ~ $2,500 before decommission (See: <a href="https://www.techpowerup.com/298894/ethereum-switches-to-proof-of-stake-gpu-mining-is-dead"> "Ethereum ... GPU Mining is Dead"</a>)</li>
            </ul>
        </p>

        <h1> Reflections </h1>
        <p>
        I have always been tinkering with computers since middle school, whether it was on my gaming PC, helping friends and family fix blue screens of death on Windows, or impulsively switching between the countless amount of Linux distributions. This was my first large-scale project involving computers and electronics in general. I spent days on figuring out mining software bugs, improper cable connections, and repositioning components for the best airflow and cable management. And, of course, there were the many hours spent on spreadsheet doing market research to find out the most efficient GPUs given our limited budget and ways to save on the overall build without compromising quality. 
        </p>
    </div>


    <!-- Right Carousel -->
    <div
      class="photo-carousel"
      style="
        width: 50%;
        max-width: 650px;
        height: 650px;
        margin: 0 auto;
      "
    >

      <div
        class="carousel-slide active"
        style="height: 100%;"
      >
        <img
          src="/images/my-projects/rig-v3.png"
          alt="Mining rig v3"
          style="
            width: 100%;
            height: 600px;
            object-fit: contain;
            display: block;
            margin: 0 auto;
          "
        >
        <p class="carousel-caption">
          <b>[Aug 2021] Mining rig final iteration (v3)</b> — With a total of 6 GPUs, we gave the rig an upgrade with an Amazon shelf. The red clips are custom 3D printed to hold GPUs in place.
        </p>
      </div>


      <div
        class="carousel-slide"
        style="height: 100%;"
      >
        <img
          src="/images/my-projects/crypto-eth-rig/rig-v2.png"
          alt="Mining rig v2"
          style="
            width: 100%;
            height: 600px;
            object-fit: contain;
            display: block;
            margin: 0 auto;
          "
        >
        <p class="carousel-caption">
          <b>[Feb 2021] Mining rig (v2) </b> — Expansion with 3 additional GPUs (4 total) mounted above ground.
        </p>
      </div>


      <div
        class="carousel-slide"
        style="height: 100%;"
      >
        <img
          src="/images/my-projects/crypto-eth-rig/rig-v1.png"
          alt="Mining rig v1"
          style="
            width: 100%;
            height: 600px;
            object-fit: contain;
            display: block;
            margin: 0 auto;
          "
        >
        <p class="carousel-caption">
          <b>[Jan 2021] Mining rig v1</b> - Our humble beginnings: we only had one GPU at this time. We made this frame out of scrap wood blocks and aluminum corners.
        </p>
      </div>


      <div
        class="carousel-slide"
        style="height: 100%;"
      >
        <img
          src="/images/my-projects/crypto-eth-rig/gpu-prayer.png"
          alt="Funny GPU prayer altar"
          style="
            width: 100%;
            height: 600px;
            object-fit: contain;
            display: block;
            margin: 0 auto;
          "
        >
        <p class="carousel-caption">
          Due to the 2021 chip shortage, we had to camp outside of MicroCenter at 6AM often to get a chance at a GPU voucher. One morning, we found this hilarious GPU prayer altar with a jesus candle. 
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


<!-- ===== Crypto Carousel Local Styling ===== -->

<style>

  /* Make the crypto carousel larger */
  .photo-carousel {
    width: 50% !important;
    max-width: 650px !important;
    height: 650px !important;
    margin: 0 auto !important;
  }

  /* Make the active slide fill the carousel */
  .photo-carousel .carousel-slide.active {
    width: 100%;
    height: 100% !important;
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  /* Make the photo fill the carousel area */
  .photo-carousel .carousel-slide.active img {
    width: 100% !important;
    height: 600px !important;
    max-width: none !important;
    object-fit: contain !important;
    display: block;
    margin: 0 auto;
  }

  /* Caption */
  .photo-carousel .carousel-caption {
    margin: 8px 0 0;
  }

  /* Mobile */
  @media (max-width: 768px) {

    .photo-carousel {
      width: 100% !important;
      max-width: 650px !important;
      height: 550px !important;
      margin: 2em auto !important;
    }

    .photo-carousel .carousel-slide.active img {
      width: 100% !important;
      height: 500px !important;
      object-fit: contain !important;
    }

  }

</style>


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

<style>

  /* =========================================================
     CRYPTO RIG PAGE — LOCAL CAROUSEL OVERRIDES
     ========================================================= */

  /* Make the text/carousel columns 50/50 instead of 60/40 */
  .home-section-grid {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) !important;
    gap: 2em !important;
  }

  /* Make carousel fill its entire column */
  .home-section-grid .photo-carousel {
    width: 100% !important;
    max-width: none !important;
    height: 650px !important;
    margin: 0 !important;
    float: none !important;
  }

  /* Make the active slide fill the carousel */
  .home-section-grid .photo-carousel .carousel-slide.active {
    width: 100% !important;
    height: 100% !important;
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  /* Make image as large as possible while keeping entire photo visible */
  .home-section-grid .photo-carousel .carousel-slide.active img {
    width: 100% !important;
    height: 750px !important;
    max-width: none !important;
    object-fit: contain !important;
    display: block !important;
    margin: 0 auto !important;
  }

  /* Caption */
  .home-section-grid .photo-carousel .carousel-caption {
    margin: 8px 0 0 !important;
    font-size: 0.9em;
  }


  /* =========================================================
     MOBILE
     ========================================================= */

  @media (max-width: 768px) {

    .home-section-grid {
      grid-template-columns: 1fr !important;
      gap: 1.5em !important;
    }

    .home-section-grid .photo-carousel {
      width: 100% !important;
      max-width: 600px !important;
      height: 500px !important;
      margin: 0 auto !important;
    }

    .home-section-grid .photo-carousel .carousel-slide.active img {
      width: 100% !important;
      height: 450px !important;
      object-fit: contain !important;
    }

  }

</style>