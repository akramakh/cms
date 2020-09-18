import React from 'react';
import userImg from '../../../assets/images/user1.png';
import './style.scss';

export default function About() {
  return (
    <section id='about'>
      <div class='container cms-container'>
        <div class='row'>
          <div class='col-md-3 cms-col'>
            <div class='img-container'>
              <img src={userImg} alt='avatar' />
            </div>
          </div>
          <div class='col-md-9 cms-col'>
            <div class='row'>
              <div class='col-md-12 cms-col'>
                <div class='info'>
                  <h1 class='name'>akram abu khousa</h1>
                  <p class='description'>
                    21-year-old, Palestinian, Computer Systems Engineer at{' '}
                    <a href='#'>Al-Azhar University</a> of Gaza. Moreover, I've
                    been a student at <a href='#'>Al Fakhoora</a> organization
                    since 2016.
                    <br />
                    I've got a lot of IT cources in several areas like
                    Programming (Web Development, Android Development and Java
                    Apps), Multimedia (Graphic Design, UI / UX, Motion Graphic
                    and Photography) and other computer cseince fieldes like
                    Computer Networking (CCNA), Data Analysis, EHC and ICDL.
                    <br />I love Working with team, and I'm a flexible man. On
                    the other hand, I have a good communication skills since I
                    had a lot of training cources in communication skills, Civic
                    Leadership, Presentation Skills, 'The art of Dialogue and
                    Facilitating' and Social Media Marketing.
                  </p>
                </div>
              </div>
            </div>
            <div class='row'>
              <div class='col-md-12 cms-col'>
                <h2 class='skills-title'>skills</h2>
              </div>
            </div>
            <div class='row'>
              <div class='col-md-6 cms-col skills-cat'>
                <div class='title'>programming</div>
                <div class='skills'>
                  <ul>
                    <li>
                      <i class='fa fa-cog'></i>
                    </li>
                    <li>
                      <i class='fa fa-cog'></i>
                    </li>
                    <li>
                      <i class='fa fa-cog'></i>
                    </li>
                    <li>
                      <i class='fa fa-cog'></i>
                    </li>
                    <li>
                      <i class='fa fa-cog'></i>
                    </li>
                  </ul>
                </div>
              </div>
              <div class='col-md-6 cms-col skills-cat'>
                <div class='title'>Graphic Design</div>
                <div class='skills'>
                  <ul>
                    <li>
                      <i class='fa fa-cog'></i>
                    </li>
                    <li>
                      <i class='fa fa-cog'></i>
                    </li>
                    <li>
                      <i class='fa fa-cog'></i>
                    </li>
                    <li>
                      <i class='fa fa-cog'></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class='row'>
              <div class='col-md-12 cms-col'>
                <button class='btn btn-primary'>Download Resume`</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
