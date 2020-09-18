import React, {Component} from 'react';
import CommingSoon from './components/sections/commingSoon';
import Header from './components/header';
import Hero from './components/sections/hero';
import About from './components/sections/about';
import Footer from './components/sections/footer';

import './App.scss';

class App extends Component {
  commingSoon = false;
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
          <About />
          <Footer />
        </section>
      </div>
    );
  }
}

export default App;
