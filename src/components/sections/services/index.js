import React, {useState, useEffect} from 'react';
import {
  TiDeviceDesktop,
  TiVendorAndroid,
  TiVendorApple,
  TiBrush,
  TiDevicePhone,
} from 'react-icons/ti';
import {FirebaseDB} from '../../../firebaseConfig';

import './style.scss';

const initData = {
  items: [],
  title: 'Services',
  action_button: {
    text: 'My Resume`',
    url: '#about',
    style: '{}',
  },
};

const iconsMap = {
  TiDeviceDesktop: <TiDeviceDesktop />,
  TiVendorAndroid: <TiVendorAndroid />,
  TiVendorApple: <TiVendorApple />,
  TiBrush: <TiBrush />,
  TiDevicePhone: <TiDevicePhone />,
};

export default function Services(props) {
  const [title, setTitle] = useState(initData.title);
  const [action_button, setActionButton] = useState(initData.action_button);
  const [items, setItems] = useState(initData.items);

  const {onClick} = props;

  useEffect(() => {
    const servicesRef = FirebaseDB.ref('sections/services/');
    servicesRef.on('value', (snapshot) => {
      if (snapshot && snapshot.exists()) {
        const data = snapshot.val();
        let {title, action_button, items} = data;
        const keys = Object.keys(items);
        const service_items = keys.map((key) => items[key]);
        setTitle(title);
        setActionButton(action_button);
        setItems(service_items);
      }
    });
  }, []);
  console.log('items', items);
  const renderServicesItems = () => {
    const data = items.map((item) => {
      return (
        <div class='col-md-4'>
          <div class='box box-services'>
            <div class='icon'>{iconsMap[item.icon]}</div>
            <h4 class='heading'>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </div>
      );
    });
    return <div class='row service-container'>{data}</div>;
  };
  return (
    <section id='services' class='section-gray'>
      <div class='container clearfix'>
        <div class='row services'>
          <div class='col-md-12'>
            <h1 class='heading'>{title}</h1>
            {renderServicesItems()}
            <div class='row'>
              <div class='col-md-4'></div>
              <div class='col-md-4 center'>
                <div class='box box-button'>
                  <button class='btn btn-primary hire-me' onClick={onClick}>
                    {action_button.text}
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
