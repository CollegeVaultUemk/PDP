import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>CROSSY</h1>
      <p>HANGOUT ANYTIME,ANYWHERE. <br /> Get ready to CROSS paths. <br/>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        
        <a className='trailer' href='https://youtu.be/BucPo87RefQ' target='_blank'>WATCH TRAILER <i className='far fa-play-circle' /></a> 
      </div>
    </div>
  );
}

export default HeroSection;
