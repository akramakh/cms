import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaWhatsapp,
  FaBehance,
} from 'react-icons/fa';

import './style.scss';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer>
        <div class='container cms-container'>
          <div class='row copyright'>
            <div class='col-md-3'>
              <p class='copyright roboto'>&copy;{year} | Akram AKH</p>
            </div>
            <div class='col-md-6'>
              <p class='social'>
                <a
                  href='http://www.fb.com/akramabukhousa'
                  title='@akramabukhousa'
                  class='facebook'
                  target='_blank'
                >
                  <FaFacebookF />
                </a>
                <a
                  href='http://www.twitter.com/akramabukhousa'
                  title='@akramabukhousa'
                  class='twitter'
                  target='_blank'
                >
                  <FaTwitter />
                </a>
                <a
                  href='http://www.instagram.com/akramabukhousa'
                  title='@akramabukhousa'
                  class='instagram'
                  target='_blank'
                >
                  <FaInstagram />
                </a>
                <a
                  href='http://github.com/akramakh'
                  title='+970595527040'
                  class='gplus'
                  target='_blank'
                >
                  <FaGithub />
                </a>
                <a
                  href='http://www.wa.me/970595527040'
                  title='+970595527040'
                  class='gplus'
                  target='_blank'
                >
                  <FaWhatsapp />
                </a>
                <a
                  href='http://www.behance.net/akramakh'
                  title='@akramabukhousa'
                  class='email'
                  target='_blank'
                >
                  <FaBehance />
                </a>
              </p>
            </div>
            <div class='col-md-3'>
              <p class='credit roboto'>Personal Website</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
