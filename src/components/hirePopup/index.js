import React, {useState, useEffect} from 'react';
import {Modal} from 'antd';
import {FirebaseDB} from '../../firebaseConfig';

import './style.scss';

const initData = {
  logo: {
    url:
      'https://firebasestorage.googleapis.com/v0/b/akram-cms.appspot.com/o/logo.png?alt=media&token=eecd4dda-e92d-48cb-82e9-aacd225ac5c6',
    title: 'LOGO',
    link: '#home',
  },
  title: 'Hire me on',
  footer_buttons: [
    {
      text: 'UpWork',
      url: '#',
      class: 'btn-upwork',
    },
  ],
};

export default function HirePopup(props) {
  const {visible, onOk, onCancel, children} = props;
  const [logo, setLogo] = useState(initData.logo);
  const [title, setTitle] = useState(initData.title);
  const [footerButtons, setFooterButtons] = useState(initData.footer_buttons);

  useEffect(() => {
    const hirePopupRef = FirebaseDB.ref('/hire_popup/');
    hirePopupRef.on('value', (snapshot) => {
      if (snapshot && snapshot.exists()) {
        const data = snapshot.val();
        const {logo, title, footer_buttons} = data;
        const btn_keys = Object.keys(footer_buttons);
        const footer_btns = btn_keys.map((key) => footer_buttons[key]);
        console.log('footer_btns', footer_btns);
        setLogo(logo);
        setTitle(title);
        setFooterButtons(footer_btns);
      }
    });
  }, []);

  const renderFooterButtons = () => {
    const data = footerButtons.map((btn) => {
      return (
        <button key={btn.text} className={`btn ${btn.class}`}>
          <a href={btn.url} target='_blank' rel='noopener noreferrer'>
            {btn.text}
          </a>
        </button>
      );
    });
    return <>{data}</>;
  };

  return (
    <div className='popup-container'>
      <Modal
        centered
        width={700}
        visible={visible}
        onOk={onOk}
        onCancel={onOk}
        wrapClassName='modern-popup vertical-center-modal'
        footer={renderFooterButtons()}
      >
        <div className='modal-content-container'>
          <div class='img-container'>
            <img src={logo.url} alt={logo.title} />
          </div>
          <h1>{title}</h1>
        </div>
      </Modal>
    </div>
  );
}
