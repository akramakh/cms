import React, {useState, useEffect} from 'react';
import {FaHome, FaPhone, FaEnvelope} from 'react-icons/fa';
import {notification} from 'antd';
import {FirebaseDB} from '../../../firebaseConfig';

import './style.scss';

const initData = {
  contact_info: [
    {
      icon: '',
      text: '',
    },
  ],
  title: 'Contact',
  description:
    'Hi, If you have any question or you want any service of\
  which I produce you can contact me by sending your message\
  in the side form.\
  or you can contact me on any social media platform which are\
  below or by contact on my number.',
};

const iconsMap = {
  FaHome: <FaHome />,
  FaPhone: <FaPhone />,
  FaEnvelope: <FaEnvelope />,
};

export default function Contact() {
  const [title, setTitle] = useState(initData.title);
  const [description, setDescription] = useState(initData.description);
  const [info, setInfo] = useState(initData.contact_info);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [contact_status, setContactStatus] = useState(null);

  useEffect(() => {
    const contactRef = FirebaseDB.ref('sections/contact/');
    contactRef.on('value', (snapshot) => {
      if (snapshot && snapshot.exists()) {
        const data = snapshot.val();
        let {title, description, contact_info} = data;
        const keys = Object.keys(contact_info);
        const info = keys.map((key) => contact_info[key]);
        setTitle(title);
        setDescription(description);
        setInfo(info);
      }
    });
  }, []);

  const clearContactForm = () => {
    setEmail('');
    setMessage('');
    setFirstName('');
    setLastName('');
  };

  const renderErrorMessage = (errors) => {
    const data = errors.map((error, index) => {
      return <li hey={index}>{error}</li>;
    });
    return <ul>{data}</ul>;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = [];
    if (!email || email.trim().length == 0) {
      errors.push('please provide your email');
    }
    if (!message || message.trim().length == 0) {
      errors.push('please type a valid message');
    }

    if (errors.length > 0) {
      const status = {
        type: 'error',
        text: renderErrorMessage(errors),
      };
      setContactStatus(status);
      return;
    }

    const contactEmailsRef = FirebaseDB.ref('/contact_emails/');
    const created = Date.now();
    const messageObject = {
      email,
      message,
      first_name,
      last_name,
      created,
    };
    contactEmailsRef
      .push(messageObject)
      .then((result) => {
        clearContactForm();
        const status = {
          type: 'success',
          text: 'Thank you for your words to me.',
        };
        setContactStatus(status);
      })
      .catch((error) => {
        const status = {
          type: 'error',
          text: error,
        };
        setContactStatus(status);
      });
  };

  const resetContactStatus = () => {
    setContactStatus(null);
  };

  const openNotification = () => {
    if (contact_status.type == 'success') {
      notification.success({
        message: contact_status.type,
        description: contact_status.text,
        placement: 'topLeft',
        onClose: resetContactStatus,
      });
    } else if (contact_status.type == 'error') {
      notification.error({
        message: contact_status.type,
        description: contact_status.text,
        placement: 'topLeft',
        onClose: resetContactStatus,
      });
    }
  };

  const renderContactInfo = () => {
    const data = info.map((item) => {
      return (
        <li key={item.icon}>
          <a>
            {iconsMap[item.icon]} {item.text}
          </a>
        </li>
      );
    });
    return <ul>{data}</ul>;
  };

  return (
    <section id='contacts'>
      <div class='container cms-container'>
        <div class='row'>
          <div class='col-md-12 cms-col'>
            <div class='contact-box'>
              <div class='row'>
                <div class='col-md-1 cms-col'></div>
                <div class='col-md-5 cms-col text'>
                  <h2 class='title'>{title}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: description,
                    }}
                  ></div>
                  <div class='single_message_right_info'>
                    {renderContactInfo()}
                  </div>
                </div>
                <div class='col-md-5 cms-col fields'>
                  <form action='#' onSubmit={handleSubmit}>
                    <div class='input-wrap'>
                      <input
                        type='text'
                        name='firstname'
                        value={first_name}
                        placeholder='First Name'
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <input
                        type='text'
                        name='lastname'
                        value={last_name}
                        placeholder='Last Name'
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                    <div class='input-wrap'>
                      <input
                        type='email'
                        name='email'
                        value={email}
                        placeholder='Email Address'
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div class='input-wrap'>
                      <textarea
                        name='message'
                        id='msg'
                        value={message}
                        cols='30'
                        rows='10'
                        class='msg'
                        placeholder='Type Your Message Here ...'
                        onChange={(e) => setMessage(e.target.value)}
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
      {contact_status && openNotification()}
    </section>
  );
}
