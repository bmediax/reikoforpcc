import React from 'react'

// Technologies
import { Helmet } from "react-helmet"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Components
import Logo from './assets/logo.png'
import Nav from './components/Nav'

// Pages
import Homepage from './pages/Homepage'
import MeetRieko from './pages/MeetRieko'
import Priorities from './pages/Priorities'
import Endorsements from './pages/Endorsements'

const App = () => {
  return (
    <Router>
      <Helmet>
        <title> Reiko 4 PCC </title>
        <meta name="description" content="Reiko Mia Williams for PCC Board Zone 7" />
        <link rel="icon" type="image/png" href={Logo} sizes="16x16" />
      </Helmet>
      <div className="RMW_container">
          <Nav logo={Logo} />
          <div className="RMW_wrapper">
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/meet-rieko" component={MeetRieko} />
              <Route path="/priorities" component={Priorities} />
              <Route path="/endorsements" component={Endorsements} />
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;