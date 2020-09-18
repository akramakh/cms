import React, {Component} from 'react';
import CommingSoon from './components/sections/commingSoon';
import Header from './components/header';
import Hero from './components/sections/hero';

import './App.scss';

class App extends Component {
  commingSoon = true;
  render() {
    if (this.commingSoon) {
      return (
        <CommingSoon
          timeTillDate='05 26 2019, 6:00 am'
          timeFormat='MM DD YYYY, h:mm a'
        />
      );
    }
    return (
      <div>
        <Header />
        <section class='body-container'>
          <Hero />
        </section>
      </div>
    );
  }
}

export default App;
