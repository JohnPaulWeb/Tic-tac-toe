import React from 'react'

const Navbar = () => {
  return (
    <div>
        <ul>
          <li className='flex flex-wrap'><a href="#home">Home</a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
        
        <div className='flex justify-end'>
          <input type="text" placeholder="Search..."/>
          </div>
    </div>
    
  )
}

export default Navbar