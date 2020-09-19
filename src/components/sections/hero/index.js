import React, {Component} from 'react';
import {FirebaseDB} from '../../../firebaseConfig';
import './index.scss';

const initData = {
  action_button: {
    text: 'Explore Me',
    url: '#about',
    style: '{}',
  },
  bg_image: 'https://images.unsplash.com/photo-1521171338749-b3a9f9ad7f34',
  greeting_text: "I'm Akram",
  description: 'Web Developer & UI/UX Designer',
};

export default class Hero extends Component {
  state = {...initData};
  headerRef = FirebaseDB.ref('sections/hero/');

  componentDidMount() {
    this.headerRef.on('value', (snapshot) => {
      if (snapshot && snapshot.exists()) {
        const data = snapshot.val();
        let {action_button, bg_image, description, greeting_text} = data;
        this.setState((state, props) => {
          return {
            ...state,
            bg_image,
            action_button,
            description,
            greeting_text,
          };
        });
      }
    });
  }

  render = () => {
    const {bg_image, action_button, description, greeting_text} = this.state;
    return (
      <section id='hero'>
        <div class='bg' id='hero_bg'>
          <div class='overlay'></div>
          <img src={bg_image} alt='background' />
        </div>
        <div class='greeting-container' id='greeting'>
          <h1 class='question'>{greeting_text}</h1>
          <b class='answer'>{description}</b>
          <a href={action_button.url} class='btn btn-primary explore-me'>
            {action_button.text}
          </a>
        </div>
      </section>
    );
  };
}
