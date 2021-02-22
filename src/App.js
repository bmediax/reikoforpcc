// Importing Reacting
import { React } from 'react'

// Technologies
import { Helmet } from "react-helmet"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Components
import Logo from './assets/logo.png'
import Nav from './components/Nav'
import Footer from './components/Footer'

// Pages
import Homepage from './pages/Homepage/Homepage'
import MeetReiko from './pages/MeetReiko/MeetReiko'
import Priorities from './pages/Priorities/Priorities'
import Endorsements from './pages/Endorsements/Endorsements'
import Error from './pages/Error'

// Contexts
import { navContext } from './tools/navContext'
import { donationContext } from './tools/donationContext'

// Data
import { navObjects } from './data/navObjects';

const App = () => {
  const DonationLink = "https://secure.actblue.com/donate/friends-of-reiko-1"

  return (
    <Router>
      <donationContext.Provider value={DonationLink}>
        <Helmet>
          <title> Reiko 4 PCC </title>
          <meta name="description" content="Reiko Mia Williams for PCC Board Zone 7" />
          <link rel="icon" type="image/png" href={Logo} sizes="16x16" />
        </Helmet>
        <navContext.Provider value={navObjects}>
          <div className="RMW_container">
              <Nav logo={Logo} />
              <div className="RMW_wrapper">
                <Switch>
                  <Route path="/" exact component={Homepage} />
                  <Route path="/meet-reiko" component={MeetReiko} />
                  <Route path="/priorities" component={Priorities} />
                  <Route path="/endorsements" component={Endorsements} />
                  <Route component={Error} />
                </Switch>
              </div>
              <Footer logo={Logo} />
          </div>
        </navContext.Provider>
      </donationContext.Provider>
    </Router>
  );
}

export default App;