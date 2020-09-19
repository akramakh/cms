import React, {Component} from 'react';
import {
  FaSearch,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from 'react-icons/fa';
import {FirebaseDB} from '../../firebaseConfig';
import './index.scss';

const initData = {
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

export default class Header extends Component {
  state = {...initData};
  headerRef = FirebaseDB.ref('sections/header/');
  componentDidMount() {
    this.headerRef.on('value', (snapshot) => {
      console.log('snapshot', snapshot);
      if (snapshot && snapshot.exists()) {
        const data = snapshot.val();
        let {action_button, logo, social_links} = data;
        console.log('social_links', social_links);
        const keys = Object.keys(social_links);
        const social_list = keys.map((key) => social_links[key]);
        social_links = [...social_list];

        this.setState((state, props) => {
          return {...state, logo, action_button, social_links};
        });
      }
    });
  }

  renderSocialLinks = () => {
    const {social_links} = this.state;
    const data = social_links.map((link) => {
      return (
        <div class='social-item'>
          <a href={link.link} alt={link.title}>
            {iconsMap[link.icon]}
          </a>
        </div>
      );
    });
    return data;
  };

  render = () => {
    const {action_button, logo} = this.state;

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
                    <div class='social-container'>
                      {this.renderSocialLinks()}
                    </div>
                  </div>
                  <div class='col-md-2 cms-col hire-col pad-0'>
                    <a
                      class='btn btn-primary hire-me'
                      data-toggle='modal'
                      data-target='#hireModal'
                    >
                      {action_button.text}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  };
}
