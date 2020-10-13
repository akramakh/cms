import React, {useState, useEffect} from 'react';
import {Modal, notification} from 'antd';
import {FirebaseDB} from '../../firebaseConfig';

import './style.scss';

export default function HirePopup(props) {
  const {visible, onOk, onCancel, children} = props;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState(null);


  const clearForm = () => {
    setEmail('');
    setName('');
  };

  const renderErrorMessage = (errors) => {
    const data = errors.map((error, index) => {
      return <li hey={index}>{error}</li>;
    });
    return <ul>{data}</ul>;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('button clicked')
    const errors = [];
    if (!email || email.trim().length == 0) {
      errors.push('please provide a valid email');
    }

    if (errors.length > 0) {
      const status = {
        type: 'error',
        text: renderErrorMessage(errors),
      };
      setStatus(status);
      return;
    }

    const notifyMeRef = FirebaseDB.ref('/notify_me/');
    const created = Date.now();
    const messageObject = {
      email,
      name,
      created,
    };
    notifyMeRef
      .push(messageObject)
      .then((result) => {
        clearForm();
        const status = {
          type: 'success',
          text: "Thank you, I'll inform you about updates.",
        };
        setStatus(status);
      })
      .catch((error) => {
        const status = {
          type: 'error',
          text: error,
        };
        setStatus(status);
      });
  };

  const resetStatus = () => {
    setStatus(null);
  };

  const openNotification = () => {
    if (status.type == 'success') {
      notification.success({
        message: status.type,
        description: status.text,
        placement: 'topLeft',
        onClose: resetStatus,
      });
    } else if (status.type == 'error') {
      notification.error({
        message: status.type,
        description: status.text,
        placement: 'topLeft',
        onClose: resetStatus,
      });
    }
  };

  return (
    <div id="notifyMePopup" className='popup-container'>
      <Modal
        centered
        width={700}
        visible={visible}
        onOk={onOk}
        onCancel={onOk}
        wrapClassName='modern-popup vertical-center-modal'
        footer={null}
      >
        <div id="notifyMePopup" className='modal-content-container'>
            <div class="wrap-contact2">
              <form class="contact2-form validate-form" onSubmit={handleSubmit}>
                <span class="contact2-form-title">
                  Get in touch
                </span>

                <div class="wrap-input2 validate-input" data-validate="Name is required">
                  <input class="input2" type="text" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                </div>

                <div class="wrap-input2 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                  <input class="input2" type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div class="container-contact2-form-btn">
                  <div class="wrap-contact2-form-btn">
                    <div class="contact2-form-bgbtn"></div>
                    <button class="contact2-form-btn" type="submit">
                      Notify Me
                    </button>
                  </div>
                </div>
              </form>
            </div>
        </div>
      </Modal>
      {status && openNotification()}
    </div>
  );
}
