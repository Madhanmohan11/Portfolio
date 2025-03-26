import React from 'react'
import './Hero.css'
import profile_img from '../../assets/imgs/profile.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Share from '../Share/Share'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Madhan,</span> </h1>
      <p>I am a web developer specializing in front-end development, focused on creating responsive and user-friendly web applications.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">
        <a href="./src/assets/imgs/Resume_MM.pdf.pdf" target="_blank" rel="noopener noreferrer">My Resume</a></div>
      </div>
      <div><Share></Share></div>
    </div>
  )
}

export default Hero
