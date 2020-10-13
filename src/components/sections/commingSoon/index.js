import React, {useState, useEffect} from 'react';
import moment, { min } from 'moment';
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';
import Logo from '../../../assets/images/logo.png';
import Bg01 from '../../../assets/images/bg01.jpg';
import Bg02 from '../../../assets/images/bg02.jpg';
import NotifyMePopup from '../../notifyMePopup';
import './style.scss';

export default function CommingSoon() {
  const [notifyMePopupVisible, setNotifyMePopupVisible] = useState(false);
  const [days, setDays] = useState(undefined);
  const [hours, setHours] = useState(undefined);
  const [minutes, setMinutes] = useState(undefined);
  const [seconds, setSeconds] = useState(undefined);
  
  useEffect((props) => {
    const interval = setInterval(() => {
      const props = {
        timeTillDate: '05 26 2019, 6:00 am',
        timeFormat: 'MM DD YYYY, h:mm a'
      }
      const {timeTillDate, timeFormat} = props;
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      const countdown = moment(then - now);
      const days = countdown.format('D');
      const hours = countdown.format('HH');
      const minutes = countdown.format('mm');
      const seconds = countdown.format('ss');

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    }
  }, [])
  // componentDidMount() {
  //   this.interval = setInterval(() => {
  //     const {timeTillDate, timeFormat} = this.props;
  //     const then = moment(timeTillDate, timeFormat);
  //     const now = moment();
  //     const countdown = moment(then - now);
  //     const days = countdown.format('D');
  //     const hours = countdown.format('HH');
  //     const minutes = countdown.format('mm');
  //     const seconds = countdown.format('ss');

  //     this.setState({days, hours, minutes, seconds});
  //   }, 1000);
  // }

  // componentWillUnmount() {
  //   if (this.interval) {
  //     clearInterval(this.interval);
  //   }
  // }

    if (!seconds) {
      return null;
    }

    return (
      <section>
        <div class='simpleslide'>
          <div
            class='simpleslide-item bg-img1'
            style={{'background-image': `url(${Bg02})`}}
          ></div>
          <div
            class='simpleslide-item bg-img1'
            style={{'background-image': `url(${Bg01})`}}
          ></div>
        </div>

        <div class='content overlay'>
          <div class='header'>
            <div class='logo'>
              <a href='#'>
                <img src={Logo} alt='LOGO' />
              </a>
            </div>

            <div class='action-btn'>
              <a class='size2 m1-txt1 flex-c-m how-btn1 trans-04'
              onClick={() => setNotifyMePopupVisible(true)}>
                Notify Me
              </a>
            </div>
          </div>

          <div class='countdown'>
            <h3 class='title'>Coming Soon</h3>

            <div class='counters'>
              <div class='counter-item'>
                <span class='count days'>{days}</span>
                <span class='lable'>Days</span>
              </div>

              <div class='counter-item'>
                <span class='count hours'>{hours}</span>
                <span class='lable'>Hours</span>
              </div>

              <div class='counter-item'>
                <span class='count minutes'>{minutes}</span>
                <span class='lable'>Minutes</span>
              </div>

              <div class='counter-item'>
                <span class='count seconds'>{seconds}</span>
                <span class='lable'>Seconds</span>
              </div>
            </div>
          </div>

          <div class='social-links'>
            <a
              href='https://www.facebook.com/AkramAbuKHousa/'
              class='link-item'
            >
              <FaFacebookF />
            </a>

            <a href='https://www.instagram.com/akram.akh/' class='link-item'>
              <FaInstagram />
            </a>

            <a href='https://twitter.com/akram_a_kh' class='link-item'>
              <FaTwitter />
            </a>
          </div>
        </div>
        <NotifyMePopup 
        visible={notifyMePopupVisible}
        onOk={() => setNotifyMePopupVisible(false)}
        onCancel={() => setNotifyMePopupVisible(false)}
        />
      </section>
    );
  
}
