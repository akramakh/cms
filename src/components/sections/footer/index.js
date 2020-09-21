import React, {useState, useEffect} from 'react';
import {Tooltip} from 'antd';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaWhatsapp,
  FaBehance,
} from 'react-icons/fa';
import {FirebaseDB} from '../../../firebaseConfig';

import './style.scss';

const initData = {
  social_links: [],
  username: '',
  website_type: 'Personal Portfolio',
};

const iconsMap = {
  FaFacebookF: <FaFacebookF />,
  FaInstagram: <FaInstagram />,
  FaTwitter: <FaTwitter />,
  FaGithub: <FaGithub />,
  FaWhatsapp: <FaWhatsapp />,
  FaBehance: <FaBehance />,
};

export default function Footer() {
  const year = new Date().getFullYear();

  const [username, setUsername] = useState(initData.username);
  const [websiteType, setWebsiteType] = useState(initData.website_type);
  const [socialLinks, setSocialLinks] = useState(initData.social_links);

  useEffect(() => {
    const footerRef = FirebaseDB.ref('sections/footer/');
    footerRef.on('value', (snapshot) => {
      if (snapshot && snapshot.exists()) {
        const data = snapshot.val();
        let {username, website_type, social_links} = data;
        const keys = Object.keys(social_links);
        const links_list = keys.map((key) => social_links[key]);
        setUsername(username);
        setWebsiteType(website_type);
        setSocialLinks(links_list);
      }
    });
  }, []);

  const renderLinks = () => {
    const data = socialLinks.map((link) => {
      return (
        <Tooltip placement='top' title={link.title}>
          <a
            href={link.url}
            title={link.title}
            class={link.class_name}
            target='_blank'
          >
            {iconsMap[link.icon]}
          </a>
        </Tooltip>
      );
    });
    return <p class='social'>{data}</p>;
  };
  return (
    <div>
      <footer>
        <div class='container cms-container'>
          <div class='row copyright'>
            <div class='col-md-3'>
              <p class='copyright roboto'>
                &copy;{year} | {username}
              </p>
            </div>
            <div class='col-md-6'>{renderLinks()}</div>
            <div class='col-md-3'>
              <p class='credit roboto'>{websiteType}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
