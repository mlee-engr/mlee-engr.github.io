---
title: "Gear Reducer Transmission"
permalink: /my-projects/gear-reducer/
layout: archive
---
{% include work-in-progress.html %}


<div class="home-section-box">


<div class="home-section-text">
<h1> Background </h1>
<p>
As the final project of our Machine Elements Design course, I designed 1 shaft in a 3-shaft gear reducer, incorporating everything learned from the class about shafts, gears, bearings, contact/bending stresses, and fatigue/static yield failure. I also produced detailed CAD models & drawings of gears, bearings, and my designed shaft in Siemens NX and collaborated with two teammates to integrate them into one large assembly model.
</p>

<h1> Design Requirements</h1>
<p>
    <ul>
        <li> 56kW system that converts a 2400 rpm input into target output of 340 rpm </li>
        <li> N (number of cycles) > 10 million revolutions ("infinite life") -> select appropriate commercial bearings. </li>
        <li> Factors of safety for fatigue & yield failure > 1.27 on all shafts AND for contact, bending stresses of gears. </li>

    </ul>
</p>

<div style="text-align: center; margin: 20px 0;">
    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQG_McPhKvFBsuw2LDGHxuXSB6aA12-aKvQyAJqzWL7-BxF1-HDdVB8JkuLruBcSyKolczrH4xSrdHe/pubembed?start=true&loop=true&delayms=10000"
            frameborder="0"
            width="100%"
            height="540"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true">
    </iframe>
</div>

<h1> Final Design Specifications </h1>
<p>
<div style="display: flex; justify-content: center; align-items: center; margin: 20px 0;">
  <div style="max-width: 800px; width: 100%; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
    <img src="/files/my-projects/gear-reducer/final-design.png" 
         alt="Final Design Specs" 
         style="width: 100%; height: auto; display: block;">
  </div>
</div>
</p>
<h1> Calculations and detailed analysis </h1>
<p>
TBD note to self: add calculations, equations, gear and bearing drawings, and calculations for gear selection.
</p>




<h1> Results & Reflections </h1>
<p>
Through this project, I successfully designed a 3-shaft gear reducer that meets all specified design requirements with factors of safety well above the 1.27 minimum across all failure modes. The design process reinforced my understanding of fatigue analysis, gear geometry, and the critical importance of validation through both analytical methods and CAD modeling.
<br>
<br>
Using Siemens NX for the CAD work and collaborating with teammates on the assembly integration demonstrated how individual component design must align with system-level requirements. The selection of commercial bearings and gears required careful consideration of real-world availability, not just theoretical performance.
<br>
<br>
The systematic approach of iteratively refining shaft geometry, selecting appropriate materials, and validating against fatigue, yield, contact, and bending criteria ensures confidence that this design would perform reliably under the specified operating conditions.
</p>




</div>