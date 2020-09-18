import React from 'react';
import {FaSearch, FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';
import Logo from '../../assets/images/logo.png';
import './index.scss';

export default function header() {
  return (
    <header id='top-nav'>
      <div class='cms-nav container cms-container'>
        <div class='row'>
          <div class='col-md-5 cms-col left-menu-col'>
            <div class='ham'>
              <i class='fa fa-list'></i>
            </div>
            <div class='left-menu'>
              <ul id='main-menu' class='main-menu'>
                <li class='item'>
                  <a href='#home'>home</a>
                </li>
                <li class='item'>
                  <a href='#about'>about</a>
                </li>
                <li class='item'>
                  <a href='#services'>services</a>
                </li>
                <li class='item'>
                  <a href='#portfolio'>portfolio</a>
                </li>
                <li class='item'>
                  <a href='#contacts'>contacts</a>
                </li>
              </ul>
            </div>
          </div>
          <div class='col-md-2 cms-col top-logo'>
            <div class='logo-container'>
              <a href='#home'>
                <div class='img-container'>
                  <img src={Logo} alt='LOGO' />
                </div>
              </a>
            </div>
          </div>
          <div class='col-md-5 cms-col right-menu-col'>
            <div class='right-menu'>
              <div class='row'>
                <div class='col-md-4 cms-col search-col pad-0'>
                  <div
                    class='search-container'
                    data-toggle='modal'
                    data-target='#searchModal'
                    onclick='initClose()'
                  >
                    <FaSearch className='cms-fa' />
                  </div>
                </div>
                <div class='col-md-6 cms-col social-col'>
                  <div class='social-container'>
                    <div class='social-item'>
                      <a href='#'>
                        <FaTwitter className='cms-fa' />
                      </a>
                    </div>
                    <div class='social-item'>
                      <a href='#'>
                        <FaFacebookF className='cms-fa' />
                      </a>
                    </div>
                    <div class='social-item'>
                      <a href='#'>
                        <FaInstagram className='cms-fa' />
                      </a>
                    </div>
                  </div>
                </div>
                <div class='col-md-2 cms-col hire-col pad-0'>
                  <a
                    class='btn btn-primary hire-me'
                    data-toggle='modal'
                    data-target='#hireModal'
                  >
                    Hire Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
