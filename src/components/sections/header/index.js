import React, {useState, useEffect} from 'react';
import {
  FaSearch,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from 'react-icons/fa';
import {Tooltip} from 'antd';
import {FirebaseDB} from '../../../firebaseConfig';
import './index.scss';

const initData = {
  status: 'top',
  navStyle: {
    'background-color': 'transparent',
    'box-shadow': 'none',
  },
  action_button: {
    text: 'Hire Me',
    url: '',
    style: '{}',
  },
  social_links: [
    {
      icon: 'Icon',
      title: 'title',
      link: 'link',
    },
  ],
  logo: {
    url:
      'https://firebasestorage.googleapis.com/v0/b/akram-cms.appspot.com/o/logo.png?alt=media&token=eecd4dda-e92d-48cb-82e9-aacd225ac5c6',
    title: 'LOGO',
    link: '#home',
  },
};

const iconsMap = {
  FaTwitter: <FaTwitter className='cms-fa' />,
  FaFacebook: <FaFacebook className='cms-fa' />,
  FaFacebookF: <FaFacebookF className='cms-fa' />,
  FaInstagram: <FaInstagram className='cms-fa' />,
};

export default function Header(props) {
  const [logo, setLogo] = useState(initData.logo);
  const [status, setStatus] = useState(initData.status);
  const [navStyle, setNavStyle] = useState(initData.navStyle);
  const [socialLinks, setSocialLinks] = useState(initData.social_links);
  const [actionButton, setActionButton] = useState(initData.action_button);

  const {onClick} = props;

  useEffect(() => {
    const headerRef = FirebaseDB.ref('sections/header/');
    const listener = document.addEventListener('scroll', (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      let navStyle = {
        'background-color': 'transparent',
        'box-shadow': 'none',
      };
      if (scrolled >= 520) {
        if (status !== 'scrolling') {
          navStyle = {
            'background-color': '#0d131a',
            'box-shadow': '0 0 20px #0d131a99',
          };
          setNavStyle(navStyle);
          setStatus('scrolling');
        }
      } else {
        if (status !== 'top') {
          setNavStyle(navStyle);
          setStatus('top');
        }
      }
    });
    headerRef.on('value', (snapshot) => {
      if (snapshot && snapshot.exists()) {
        const data = snapshot.val();
        let {action_button, logo, social_links} = data;
        const keys = Object.keys(social_links);
        const links = keys.map((key) => social_links[key]);

        setLogo(logo);
        setSocialLinks(links);
        setActionButton(action_button);
      }
    });
  }, []);

  const renderSocialLinks = () => {
    const data = socialLinks.map((link) => {
      return (
        <div class='social-item'>
          <Tooltip placement='top' title={link.title}>
            <a href={link.link} alt={link.title}>
              {iconsMap[link.icon]}
            </a>
          </Tooltip>
        </div>
      );
    });
    return data;
  };

  return (
    <header id='top-nav' style={navStyle}>
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
              <a href={logo.link}>
                <div class='img-container'>
                  <img src={logo.url} alt={logo.title} />
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
                  <div class='social-container'>{renderSocialLinks()}</div>
                </div>
                <div class='col-md-2 cms-col hire-col pad-0'>
                  <a class='btn btn-primary hire-me' onClick={onClick}>
                    {actionButton.text}
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
