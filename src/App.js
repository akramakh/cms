import React, {Component} from 'react';
import CommingSoon from './components/sections/commingSoon';
import Header from './components/sections/header';
import Hero from './components/sections/hero';
import About from './components/sections/about';
import Services from './components/sections/services';
import Portfolio from './components/sections/portfolio';
import Contact from './components/sections/contact';
import Footer from './components/sections/footer';

import 'antd/dist/antd.css';
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
          <Services />
          <Portfolio />
          <Contact />
          <Footer />
        </section>
      </div>
    );
  }
}

export default App;
