import React from 'react'
import Logo from './assets/logo.png'
import Nav from './components/Nav'
import { Helmet } from "react-helmet"
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Helmet>
        <title> Reiko 4 PCC </title>
        <meta name="description" content="Reiko Mia Williams for PCC Board Zone 7" />
        <link rel="icon" type="image/png" href={Logo} sizes="16x16" />
      </Helmet>
      <div className="RMW_container">
        <div className="RMW_wrapper">
          <Nav logo={Logo} />
        </div>
      </div>
    </Router>
  );
}

export default App;
