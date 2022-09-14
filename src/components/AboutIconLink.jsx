import { FaQuestion } from 'react-icons/fa'
import {Link} from 'react-router-dom'

import React from 'react'

const AboutIconLink = () => {
  return (
    <div className='about-Link'>
       {/* <a href='/about'>  */}
       <Link exact to='/about'> 

        <FaQuestion size={30}/>
       </Link> 
    </div>
  )
}

export default AboutIconLink