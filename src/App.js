import Header from './components/Header'
import Contact from './components/Contact'
import Footer from "./components/Footer"
import Logo from './assets/logo.png'

const App = () => {
  return (
    <div className="RMW_container">
      <div className="RMW_wrapper">
        <img src={Logo} alt="logo" id="logo" />
        <Header />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
