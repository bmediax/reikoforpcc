import React from 'react'
import Header from './components/Header'
import Contact from './components/Contact'
import Footer from "./components/Footer"
import Logo from './assets/logo.png'
import { Helmet } from "react-helmet"

const App = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title> Reiko for PCC </title>
        <meta name="description" content="Reiko Mia Williams for PCC Board Zone 7" />
        <link rel="icon" type="image/png" href={Logo} sizes="16x16" />
      </Helmet>
      <div className="RMW_container">
        <div className="RMW_wrapper">
          <img src={Logo} alt="logo" id="logo" />
          <Header />
          <Contact />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
