import './App.scss'
import AboutUs from './components/AboutUs/AboutUs'
import ContactUs from './components/ContactUs/ContactUs'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Services from './components/Services/Services'
import Welcome from './components/Welcome/Welcome'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Services />
      <AboutUs />
      <ContactUs />
      <Footer/>
      <ScrollToTop/>
    </div>
  )
}

export default App
