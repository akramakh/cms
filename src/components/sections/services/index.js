import React from 'react';
import {
  TiDeviceDesktop,
  TiVendorAndroid,
  TiVendorApple,
  TiBrush,
  TiDevicePhone,
} from 'react-icons/ti';

import './style.scss';

export default function Services() {
  return (
    <section id='services' class='section-gray'>
      <div class='container clearfix'>
        <div class='row services'>
          <div class='col-md-12'>
            <h1 class='heading'>Services</h1>
            <div class='row service-container'>
              <div class='col-md-4'>
                <div class='box box-services'>
                  <div class='icon'>
                    <TiDeviceDesktop />
                  </div>
                  <h4 class='heading'>Website</h4>
                  <p>Responsive Website Development (Laravel and Vue.js)</p>
                </div>
              </div>
              <div class='col-md-4'>
                <div class='box box-services'>
                  <div class='icon'>
                    <TiVendorAndroid />
                  </div>
                  <h4 class='heading'>Android</h4>
                  <p>Android application Development & Design</p>
                </div>
              </div>
              <div class='col-md-4'>
                <div class='box box-services'>
                  <div class='icon'>
                    <TiVendorApple />
                  </div>
                  <h4 class='heading'>IOS</h4>
                  <p>IOS application Development & Design</p>
                </div>
              </div>
            </div>
            <div class='row service-container'>
              <div class='col-md-4'>
                <div class='box box-services'>
                  <div class='icon'>
                    <TiDevicePhone />
                  </div>
                  <h4 class='heading'>UX &amp; UI</h4>
                  <p>
                    Cutting edge Designs and responsive with multi platforms
                  </p>
                </div>
              </div>
              <div class='col-md-4'>
                <div class='box box-services'>
                  <div class='icon'>
                    <TiDevicePhone />
                  </div>
                  <h4 class='heading'>Graphic design</h4>
                  <p>
                    Logo & Pranding, Business Cards, Infographics and Vector Art
                  </p>
                </div>
              </div>
              <div class='col-md-4'>
                <div class='box box-services'>
                  <div class='icon'>
                    <TiBrush />
                  </div>
                  <h4 class='heading'>Motion Graphic</h4>
                  <p>Video Montagate, Text Animation and Motion Graphics</p>
                </div>
              </div>
            </div>
            <div class='row'>
              <div class='col-md-4'></div>
              <div class='col-md-4 center'>
                <div class='box box-button'>
                  <button
                    class='btn btn-primary hire-me'
                    data-toggle='modal'
                    data-target='#hireModal'
                  >
                    Hire me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
