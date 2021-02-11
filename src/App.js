import Header from './components/Header'
import NotifyMe from './components/NotifyMe'
import SocialMediaBtns from './components/SocialMediaBtns'
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="RMW_container">
      <div className="RMW_wrapper">
        <img src="https://via.placeholder.com/150" alt="logo" id="logo" />
        <Header />
        <NotifyMe />
        <SocialMediaBtns />
        <Footer />
      </div>
    </div>
  );
}

export default App;
