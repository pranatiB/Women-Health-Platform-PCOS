import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Your personal PCOS tracking assistant</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        {/* <a href="/test.js">
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        > 
          Go to PCOS Form
        </Button>
      </a> */}
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
 
          GET STARTED
        </Button>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
