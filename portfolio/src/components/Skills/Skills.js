import React from 'react'
import "./Skills.css"
import UIDesign from "../../assets/ui-design.png"
import WebDesign from "../../assets/website-design.png"
import AppDesign from "../../assets/app-design.png"


function Skills() {
  return (
   <section  id='skills'   >
      <span className='skillTitle'   >What I do</span>
      <span className='skillDesc'>I am a skilled  and passionate web designer with experience in creating visually appealing and user-friendly websites.I hhave a strong understanding of design and a keen eye for details .I am proficient in Html,CSS and JavaScript ,as well as design saftware such as Adobe Photoshop </span>
      
      <div className='skillBars'   >
        <div className='skillBar'>
          <img   src={UIDesign}  alt='' className='skillBarImg'    />
          <div className='skillBarText'   >
      <h2> UI/UX design</h2>
      <p>write your text here</p>
          </div>
        </div>

        <div className='skillBar'>
          <img   src={WebDesign}   alt='' className='skillBarImg'    />
          <div className='skillBarText'   >
      <h2> Website design</h2>
      <p>here also wwrite your text</p>
          </div>
        </div>

        <div className='skillBar'>
          <img   src={AppDesign}  alt='' className='skillBarImg'    />
          <div className='skillBarText'   >
      <h2>App design</h2>
      <p>and here too u need to write</p>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Skills
