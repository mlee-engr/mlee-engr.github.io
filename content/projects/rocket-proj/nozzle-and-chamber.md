---
title: Nozzle & Combustion Chamber Design
---

# Initial specs
My initial chosen design specs were: 

<div align="center">

| Parameter | Value |
| ------ | ------- |
| Thrust (T) | 250 lbf |
| Chamber pressure (Pc) | 250 psi |
| Nozzle exit pressure | 1 atm (14.696 psi)| 
| Oxidizer-to-fuel (O/F) ratio | optimal ~8 |
| Oxidizer/Fuel | liquid nitrous oxide & E85 gas|
| Nozzle shape | conical (15 deg half-angle) |
| Characteristic length (L*) | 50cm | 
| Contraction area ratio (Ac/At) | 4 | 

</div>

Thrust and chamber pressure values lie in the typical range for amateur liquid rockets (50-500lbf) and (100-500psi), but the values of 250lbf and 250psi were chosen arbitrarily (nice numbers). 

I'm designing this for a (hopefully) eventual test-fire at sea-level, so 1 atm for the exit pressure. 

Initially, I'll use the optimal O/F ratio for maximum specific impulse (Isp), but may need to adjust this due to thermal constraints. 

Nitrous oxide is a common oxidizer and E85 is readily available at the local gas station, so that's why I chose this combination. 

L* should be between [40 and 120cm](https://arc.aiaa.org/doi/pdf/10.2514/6.2025-99491) to allow proper residence time in the combustion chamber. For the initial, I am sticking with 50cm. 

Contraction ratios typically vary from 2 to 10 for rocket engines - I am starting at 4 for now and iterating as necessary.

# Initial Results
Initial RPA results with an optimal O/F ratio of ~ 8 led to a chamber temperature of $T_c \approx 3171K$. I then did an O/F ratio and $I_{sp}$ (specific impulse) vs $T_c$ analysis to inform a more balance design that
**(1) minimally sacrifices $I_{sp}$ (i.e. efficiency)** and
**(2) reasonably reduces the combustion temperature for easier material selection, allowing simpler cooling methods** 












<!-- 
# Future Work
## Verifying and iterating on L*
An initial $L^*$ of *{insert value chosen here when decided}* was selected based on the desired chamber geometry and overall engine packaging. Future CFD analysis and, ultimately, hot-fire testing could be used to evaluate combustion efficiency and determine whether the selected $L^*$ provides sufficient chamber volume for the propellants to mix and react effectively.

If combustion efficiency is lower than assumed in the ideal RPA analysis, the engine's effective $c^*$ and overall $I_{sp}$ will decrease. The chamber length and $L^*$ could therefore be iterated based on the measured or simulated combustion performance. -->