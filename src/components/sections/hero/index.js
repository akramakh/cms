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
        <h1 class='question'>Are you looking for something ?</h1>
        <b class='answer'>
          all what you are looking for, can be found in this page. You can go
          along to the search box or by browsing all items in my site.
        </b>
        <a href='#about' class='btn btn-primary explore-me'>
          explore me
        </a>
      </div>
    </section>
  );
}
