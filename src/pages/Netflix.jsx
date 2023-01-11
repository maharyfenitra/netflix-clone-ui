import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from "react-icons/ai"
import Styled  from 'styled-components';
export default function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false)
  window.onscroll = () => {
   
    setIsScrolled(window.pageYOffset === 0 ? false : true)
  }
  return (
    <Container>
      <Navbar isScrolled={isScrolled}/>
      <div className='hero'>
        <img src="/assets/home.jpg" alt="" className='background-image'/>
        <div className="container">
          <div className="logo">
            <img src="/assets/homeTitle.webp" alt=""/>
          </div>
          <div className="buttons flex">
            <button className='flex j-center a-center'><FaPlay/> Play</button>
            <button className='flex j-center a-center'><AiOutlineInfoCircle/> More Info</button>
          </div>
        </div>
      </div>
    </Container>
  )
}

const Container = Styled.div`
  background-color: black;
`