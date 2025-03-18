import React from 'react'
import '../intro/Intro.css'
import bg from '../../assets/vijay22.png'
import {Link} from 'react-scroll'
import btnImg from '../../assets/hireme.png'


function Intro() {  
  return (
    <div>
      <section id='intro'  >
         <div className='introContent' >
          <span className='hello'  >Hello,  </span>
          <span  className='introText'>
             I am <span className='introName'>Vijay </span> 
             <br/>
             Website Designer
             </span>
           <p className='introPara'>I am a skilled Web designer with experence in creating <br/> visually appealing and user friendly website  </p>
           <Link >
           <button className='btn'   >
            <img src={btnImg}   alt=''  className='btnImg'  />
            Hire Me
           </button>
           </Link>
         </div>
         <img src={bg} alt='profile pic' className='bg'/>
      </section>
    </div>
  )
}

export default Intro
