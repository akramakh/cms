import React from 'react';
import {FaHome, FaPhone, FaEnvelope} from 'react-icons/fa';

import './style.scss';

export default function Contact() {
  return (
    <section id='contacts'>
      <div class='container cms-container'>
        <div class='row'>
          <div class='col-md-12 cms-col'>
            <div class='contact-box'>
              <div class='row'>
                <div class='col-md-1 cms-col'></div>
                <div class='col-md-5 cms-col text'>
                  <h2 class='title'>contact</h2>
                  <p class='contact-msg'>
                    Hi, If you have any question or you want any service of
                    which I produce you can contact me by sending your message
                    in the side form.
                    <br />
                    <br />
                    or you can contact me on any social media platform which are
                    below or by contact on my number.
                  </p>
                  <div class='single_message_right_info'>
                    <ul>
                      <li>
                        <a>
                          <FaHome /> Gaza, Ps
                        </a>
                      </li>
                      <li>
                        <a>
                          <FaPhone /> +970 595 527 040
                        </a>
                      </li>

                      <li>
                        <a>
                          <FaEnvelope /> akram.iwork@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class='col-md-5 cms-col fields'>
                  <form action='#'>
                    <div class='input-wrap'>
                      <input
                        type='text'
                        name='firstname'
                        placeholder='First Name'
                      />
                      <input
                        type='text'
                        name='lastname'
                        placeholder='Last Name'
                      />
                    </div>
                    <div class='input-wrap'>
                      <input
                        type='email'
                        name='email'
                        placeholder='Email Address'
                      />
                    </div>
                    <div class='input-wrap'>
                      <textarea
                        name='message'
                        id='msg'
                        cols='30'
                        rows='10'
                        class='msg'
                        placeholder='Type Your Message Here ...'
                      ></textarea>
                    </div>
                    <div class='input-wrap'>
                      <input
                        type='submit'
                        value='SEND'
                        class='btn btn-primary'
                      />
                    </div>
                  </form>
                </div>

                <div class='col-md-1 cms-col'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
