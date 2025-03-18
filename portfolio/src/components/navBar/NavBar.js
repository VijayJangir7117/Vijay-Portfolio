import React, { useState } from 'react'
import './NavBar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll'
import contactImg from '../../assets/contact.png'
import menu from '../../assets/menu.png'

function NavBar() {
  const[shoeMenu,setShowMenu]=useState(false)
  return (
    
    <nav  className='navbar'>
   <img src={logo} alt='logo'  className='logo'   />
    <div className='desktopMenu'  >
    <Link
    activeClass='active'
    to='intro'
    spy={true}
    smooth={true}
    offset={-100}
    duration={500}
    className='desktopMenuListItem'>Home</Link>
    <Link 
     activeClass='active'
     to='skills'
     spy={true}
     smooth={true}
     offset={-100}
     duration={500}
    className='desktopMenuListItem'>About</Link>
    <Link 
     activeClass='active'
     to='works'
     spy={true}
     smooth={true}
     offset={-100}
     duration={500}
    className='desktopMenuListItem'>Portfolio</Link>
    {/* <Link 
     activeClass='active'
     to='contactPage'
     spy={true}
     smooth={true}
     offset={-100}
     duration={500}
    className='desktopMenuListItem'>Clients</Link> */}
    </div>



    <button  className='desktopMenuBtn' onClick={()=>{
      document.getElementById('contact').scrollIntoView({behavior:'smooth'});
    }}  > 
      <img  src={contactImg}  alt=''  className='desktopMenuImg'   />Contact Me
    </button>

    <img src={menu} alt='Menu'  className='mobMenu'      onClick={()=>setShowMenu(!shoeMenu)}
 />
    <div className='navMenu'  style={{display:shoeMenu?'flex':'none'}}  >
    <Link
    activeClass='active'
    to='intro'
    spy={true}
    smooth={true}
    offset={-100}
    duration={500}
    onClick={()=>setShowMenu(false)}
    className='ListItem'>Home</Link>
    <Link 
     activeClass='active'
     to='skills'
     spy={true}
     smooth={true}
     offset={-100}
     duration={500}
     onClick={()=>setShowMenu(false)}
    className='ListItem'>About</Link>
    <Link 
     activeClass='active'
     to='works'
     spy={true}
     smooth={true}
     offset={-100}
     duration={500}
     onClick={()=>setShowMenu(false)}
    className='ListItem'>Portfolio</Link>
    <Link 
     activeClass='active'
     to='contactPage'
     spy={true}
     smooth={true}
     offset={-100}
     duration={500}
     onClick={()=>setShowMenu(false)}
    className='ListItem'>Contact</Link>

    

    </div>




    </nav>
  
  )
}

export default NavBar
