import Header from './components/Header'
import NotifyMe from './components/NotifyMe'
import SocialMediaBtns from './components/SocialMediaBtns'
import Footer from "./components/Footer"
import Logo from './assets/logo.png'

const App = () => {
  return (
    <div className="RMW_container">
      <div className="RMW_wrapper">
        <img src={Logo} alt="logo" id="logo" />
        <Header />
        <NotifyMe />
        <SocialMediaBtns />
        <Footer />
      </div>
    </div>
  );
}

export default App;
