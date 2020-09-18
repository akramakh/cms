import React from 'react';
import Bg from '../../../assets/images/bg.jpg';
import './index.scss';

export default function Hero() {
  return (
    <section id='hero'>
      <div class='bg' id='hero_bg'>
        <div class='overlay'></div>
        <img src={Bg} alt='background' />
      </div>
      <div class='greeting-container' id='greeting'>
        <h1 class='question'>I'm Akram</h1>
        <b class='answer'>Web Developer & UI/UX Designer</b>
        <a href='#about' class='btn btn-primary explore-me'>
          explore me
        </a>
      </div>
    </section>
  );
}
