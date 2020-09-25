import React, {useState} from 'react';
import CommingSoon from './components/sections/commingSoon';
import Header from './components/sections/header';
import Hero from './components/sections/hero';
import About from './components/sections/about';
import Services from './components/sections/services';
import Portfolio from './components/sections/portfolio';
import Contact from './components/sections/contact';
import Footer from './components/sections/footer';
import hirePopup from './components/hirePopup';

import 'antd/dist/antd.css';
import './App.scss';
import HirePopup from './components/hirePopup';

function App() {
  const [hirePopupVisible, setHirePopupVisible] = useState(false);

  const commingSoon = false;
  if (commingSoon) {
    return (
      <CommingSoon
        timeTillDate='05 26 2019, 6:00 am'
        timeFormat='MM DD YYYY, h:mm a'
      />
    );
  }

  return (
    <>
      <div>
        <Header onClick={() => setHirePopupVisible(true)} />
        <div class='body-container'>
          <Hero />
          <About />
          <Services onClick={() => setHirePopupVisible(true)} />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      </div>
      {hirePopupVisible && (
        <HirePopup
          visible={hirePopupVisible}
          onOk={() => setHirePopupVisible(false)}
          onCancel={() => setHirePopupVisible(false)}
        />
      )}
    </>
  );
}

export default App;
