import React, {Component} from 'react';
import {FirebaseDB} from '../../../firebaseConfig';
import './style.scss';

const initData = {
  action_button: {
    text: 'My Resume`',
    url: '#about',
    style: '{}',
  },
  user_image:
    'https://firebasestorage.googleapis.com/v0/b/akram-cms.appspot.com/o/0P8A1558.JPG?alt=media&token=f1b9b956-c5dc-484e-9db0-d93d9e11179d',
  name: 'Akram Abu Khousa',
  description:
    "21-year-old, Palestinian, Computer Systems Engineer at Al-Azhar University of Gaza. Moreover, I've been a student at Al Fakhoora organization since 2016.I've got a lot of IT courses in several areas like Programming (Web Development, Android Development, and Java Apps), Multimedia (Graphic Design, UI / UX, Motion Graphic and Photography), and other computer science fields like Computer Networking (CCNA), Data Analysis, EHC, and ICDL.I love working with a team, and I'm a flexible man. On the other hand, I have good communication skills since I had a lot of training courses in communication skills, Civic Leadership, Presentation Skills, 'The art of Dialogue and Facilitating' and Social Media Marketing.",
};

export default class About extends Component {
  state = {...initData};
  aboutRef = FirebaseDB.ref('sections/about/');

  componentDidMount() {
    this.aboutRef.on('value', (snapshot) => {
      if (snapshot && snapshot.exists()) {
        const data = snapshot.val();
        let {action_button, user_image, description, name} = data;
        this.setState((state, props) => {
          return {
            ...state,
            user_image,
            action_button,
            name,
            description,
          };
        });
      }
    });
  }

  render = () => {
    let {action_button, user_image, description, name} = this.state;
    return (
      <section id='about'>
        <div class='container cms-container'>
          <div class='row'>
            <div class='col-md-3 cms-col'>
              <div class='img-container'>
                <img src={user_image} alt='avatar' />
              </div>
            </div>
            <div class='col-md-9 cms-col'>
              <div class='row'>
                <div class='col-md-12 cms-col'>
                  <div class='info'>
                    <h1 class='name'>{name}</h1>
                    <p class='description'>{description}</p>
                  </div>
                </div>
              </div>
              <div class='row'>
                <div class='col-md-12 cms-col'>
                  <h2 class='skills-title'>skills</h2>
                </div>
              </div>
              <div class='row'>
                <div class='col-md-6 cms-col skills-cat'>
                  <div class='title'>programming</div>
                  <div class='skills'>
                    <ul>
                      <li>
                        <i class='fa fa-cog'></i>
                      </li>
                      <li>
                        <i class='fa fa-cog'></i>
                      </li>
                      <li>
                        <i class='fa fa-cog'></i>
                      </li>
                      <li>
                        <i class='fa fa-cog'></i>
                      </li>
                      <li>
                        <i class='fa fa-cog'></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class='col-md-6 cms-col skills-cat'>
                  <div class='title'>Graphic Design</div>
                  <div class='skills'>
                    <ul>
                      <li>
                        <i class='fa fa-cog'></i>
                      </li>
                      <li>
                        <i class='fa fa-cog'></i>
                      </li>
                      <li>
                        <i class='fa fa-cog'></i>
                      </li>
                      <li>
                        <i class='fa fa-cog'></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class='row'>
                <div class='col-md-12 cms-col'>
                  <a href={action_button.url} class='btn btn-primary'>
                    {action_button.text}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
}
