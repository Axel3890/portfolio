
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Jobs from './components/Jobs/Jobs';
import Me from './components/Me/Me';
import Navbar from './components/Navbar/Navbar';
import Sendemail from './components/SendEmail/Sendemail';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Me></Me>
      <About></About>
      <Jobs></Jobs>
      <Sendemail></Sendemail>
      <Contact></Contact>
    </div>
  );
}

export default App;
