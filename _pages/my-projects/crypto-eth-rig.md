---
title: "Cryptocurrency (ETH) Mining Rig"
permalink: /my-projects/crypto-eth-rig/
layout: archive
---
<div class="home-section-box">
<div class="home-section-text">

<!-- Text -->

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

<!-- ===== CENTERED CAROUSEL ===== -->
<div class="photo-carousel-centered">

  <div class="carousel-slide-centered active">
    <img
      src="/images/my-projects/rig-v3.png"
      alt="Mining rig v3"
    >
    <p class="carousel-caption-centered">
      <b>[Aug 2021] Mining rig final iteration (v3)</b> — With a total of 6 GPUs, we gave the rig an upgrade with an Amazon shelf. The red clips are custom 3D printed to hold GPUs in place.
    </p>
  </div>

  <div class="carousel-slide-centered">
    <img
      src="/images/my-projects/crypto-eth-rig/rig-v2.png"
      alt="Mining rig v2"
    >
    <p class="carousel-caption-centered">
      <b>[Feb 2021] Mining rig (v2)</b> — Expansion with 3 additional GPUs (4 total) mounted above ground.
    </p>
  </div>

  <div class="carousel-slide-centered">
    <img
      src="/images/my-projects/crypto-eth-rig/rig-v1.png"
      alt="Mining rig v1"
    >
    <p class="carousel-caption-centered">
      <b>[Jan 2021] Mining rig v1</b> - Our humble beginnings: we only had one GPU at this time. We made this frame out of scrap wood blocks and aluminum corners.
    </p>
  </div>

  <div class="carousel-slide-centered">
    <img
      src="/images/my-projects/crypto-eth-rig/gpu-prayer.png"
      alt="Funny GPU prayer altar"
    >
    <p class="carousel-caption-centered">
      Due to the 2021 chip shortage, we had to camp outside of MicroCenter at 6AM often to get a chance at a GPU voucher. One morning, we found this hilarious GPU prayer altar with a jesus candle. 
    </p>
  </div>

  <button
    class="carousel-prev-centered"
    onclick="changeSlideCentered(-1)"
    aria-label="Previous photo"
  >
    &#10094;
  </button>

  <button
    class="carousel-next-centered"
    onclick="changeSlideCentered(1)"
    aria-label="Next photo"
  >
    &#10095;
  </button>

</div>

<h1> Reflections </h1>
<p>
I have always been tinkering with computers since middle school, whether it was on my gaming PC, helping friends and family fix blue screens of death on Windows, or impulsively switching between the countless amount of Linux distributions. This was my first large-scale project involving computers and electronics in general. I spent days on figuring out mining software bugs, improper cable connections, and repositioning components for the best airflow and cable management. And, of course, there were the many hours spent on spreadsheet doing market research to find out the most efficient GPUs given our limited budget and ways to save on the overall build without compromising quality. 
</p>

</div>
</div>

<!-- ===== CAROUSEL STYLES ===== -->
<style>
/* ==========================================================================
   Centered Carousel
   ========================================================================== */

.photo-carousel-centered {
  position: relative;
  float: none;
  width: 100%;
  max-width: 650px;
  height: 650px;
  margin: 2em auto;
  text-align: center;
  clear: both;
}

.photo-carousel-centered .carousel-slide-centered {
  display: none !important;
  height: 100%;
}

.photo-carousel-centered .carousel-slide-centered.active {
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.photo-carousel-centered .carousel-slide-centered img {
  width: 100%;
  height: 600px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
}

.photo-carousel-centered .carousel-caption-centered {
  margin: 8px 0 0;
  font-size: 0.9em;
  color: #494e52;
  text-align: center;
}

/* Previous / next buttons - Squareish style to match other carousels */
.photo-carousel-centered .carousel-prev-centered,
.photo-carousel-centered .carousel-next-centered {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 20px;
  padding: 8px 12px;
  cursor: pointer;
  z-index: 10;
  border-radius: 4px;
}

.photo-carousel-centered .carousel-prev-centered {
  left: 8px;
}

.photo-carousel-centered .carousel-next-centered {
  right: 8px;
}

.photo-carousel-centered .carousel-prev-centered:hover,
.photo-carousel-centered .carousel-next-centered:hover {
  background: rgba(0, 0, 0, 0.75);
}

/* Responsive */
@media (max-width: 768px) {
  .photo-carousel-centered {
    height: 500px;
    max-width: 100%;
    margin: 1.5em auto;
  }

  .photo-carousel-centered .carousel-slide-centered img {
    height: 450px;
  }

  .photo-carousel-centered .carousel-prev-centered,
  .photo-carousel-centered .carousel-next-centered {
    padding: 6px 10px;
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .photo-carousel-centered {
    height: 400px;
  }

  .photo-carousel-centered .carousel-slide-centered img {
    height: 350px;
  }

  .photo-carousel-centered .carousel-prev-centered,
  .photo-carousel-centered .carousel-next-centered {
    padding: 4px 8px;
    font-size: 14px;
  }
}
</style>

<!-- ===== CENTERED CAROUSEL JAVASCRIPT ===== -->
<script>
let currentSlideCentered = 0;

const slidesCentered = document.querySelectorAll(
  '.photo-carousel-centered .carousel-slide-centered'
);

function showSlideCentered(index) {

  if (index >= slidesCentered.length) {
    currentSlideCentered = 0;
  } else if (index < 0) {
    currentSlideCentered = slidesCentered.length - 1;
  } else {
    currentSlideCentered = index;
  }

  slidesCentered.forEach(slide => {
    slide.classList.remove('active');
  });

  slidesCentered[currentSlideCentered].classList.add('active');
}

function changeSlideCentered(direction) {
  showSlideCentered(currentSlideCentered + direction);
}
</script>