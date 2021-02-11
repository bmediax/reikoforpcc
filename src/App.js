import Header from './Header'
import NotifyMe from './NotifyMe'
import SocialMediaBtns from './SocialMediaBtns'
import Footer from "./Footer"

const App = () => {
  return (
    <div className="RMW_container">
      <img src="https://via.placeholder.com/150" alt="logo" />
      <Header />
      <NotifyMe />
      <SocialMediaBtns />
      <Footer />
    </div>
  );
}

export default App;
