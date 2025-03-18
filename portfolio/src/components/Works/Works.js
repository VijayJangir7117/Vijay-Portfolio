import React from 'react'
import './Works.css'
import one from "../../assets/portfolio-1.png"
import two from "../../assets/portfolio-2.png"
import three from "../../assets/portfolio-3.png"
import four from "../../assets/portfolio-4.png"
import five from "../../assets/portfolio-5.png"
import six from "../../assets/portfolio-6.png"


function Works() {
  return (
     <secton id="works"   >
      <h2 className='workstitle'  >My protfolio</h2>
      <span className='workdDesc'>i take pride in going through every small details and continusally inhanchinf my ability ti wrok and get better my work here are some of my work done based on js ,react and Mern stack</span>

     <div className='worksImgs'  >
      <img src={one} alt=''  className='worksImg'    />
      <img src={two} alt=''  className='worksImg'    />
      <img src={three} alt=''  className='worksImg'    />
      <img src={four} alt=''  className='worksImg'    />
      <img src={five} alt=''  className='worksImg'    />
      <img src={six} alt=''  className='worksImg'    />

     </div>
     <button  className='worksBtn'  >See More</button>

      </secton>
  )
}

export default Works
