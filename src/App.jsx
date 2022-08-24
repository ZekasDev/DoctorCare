import './App.scss'
import AboutUs from './components/AboutUs/AboutUs'
import Header from './components/Header/Header'
import Services from './components/Services/Services'
import Welcome from './components/Welcome/Welcome'

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Services />
      <AboutUs />
    </div>
  )
}

export default App
