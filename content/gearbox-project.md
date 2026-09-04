---
title: Gear Reducer Transmission System
---
___
# Background
As the final project of our Machine Elements Design course, I designed 1 shaft in a 3-shaft gear reducer, incorporating everything learned from the class about shafts, gears, bearings, contact/bending stresses, and fatigue/static yield failure. I also produced detailed CAD models & drawings of gears, bearings, and my designed shaft in Siemens NX and collaborated with two teammates to integrate them into one large assembly model.

# Design Requirements
- 56kW system that converts a 2400 rpm input into target output of 340 rpm
- N (number of cycles) > 10 million revolutions ("infinite life") -> select appropriate commercial bearings.
- Factors of safety for fatigue & yield failure > 1.27 on all shafts AND for contact, bending stresses of gears.

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

# Final Design Specifications

<div style="display: flex; justify-content: center; align-items: center; margin: 20px 0;">
  <div style="max-width: 800px; width: 100%; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
    <img src="/static/images/final-design.png" 
         alt="Final Design Specs" 
         style="width: 100%; height: auto; display: block;">
  </div>
</div>

# Calculations and detailed analysis

TBD note to self: add calculations, equations, gear and bearing drawings, and calculations for gear selection.


# Results & Reflections

Through this project, I successfully designed a 3-shaft gear reducer that meets all specified design requirements with factors of safety well above the 1.27 minimum across all failure modes. The design process reinforced my understanding of fatigue analysis, gear geometry, and the critical importance of validation through both analytical methods and CAD modeling.

Using Siemens NX for the CAD work and collaborating with teammates on the assembly integration demonstrated how individual component design must align with system-level requirements. The selection of commercial bearings and gears required careful consideration of real-world availability, not just theoretical performance.

The systematic approach of iteratively refining shaft geometry, selecting appropriate materials, and validating against fatigue, yield, contact, and bending criteria ensures confidence that this design would perform reliably under the specified operating conditions.


