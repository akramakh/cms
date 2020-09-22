import React, {useState, useEffect} from 'react';
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

export default function Hero () {
  const [bgImage, setBGImage] = useState(initData.bg_image);
  const [actionButton, setActionButton] = useState(initData.action_button);
  const [greetingText, setGreetingText] = useState(initData.greeting_text);
  const [description, setDescription] = useState(initData.description);
  
  useEffect(() => {
    const headerRef = FirebaseDB.ref('sections/hero/');
    headerRef.on('value', (snapshot) => {
      if (snapshot && snapshot.exists()) {
        const data = snapshot.val();
        let {action_button, bg_image, description, greeting_text} = data;
        setBGImage(bg_image);
        setActionButton(action_button);
        setGreetingText(greeting_text);
        setDescription(description);
        
      }
    });
  }, []);

    return (
      <section id='hero'>
        <div class='bg' id='hero_bg'>
          <div class='overlay'></div>
          <img src={bgImage} alt='background' />
        </div>
        <div class='greeting-container' id='greeting'>
          <h1 class='question'>{greetingText}</h1>
          <b class='answer'>{description}</b>
          <a href={actionButton.url} class='btn btn-primary explore-me'>
            {actionButton.text}
          </a>
        </div>
      </section>
    );
}
