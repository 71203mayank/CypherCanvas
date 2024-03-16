import './App.css';
import Hero from './components/hero/Hero';
import Cipher from './components/cipher/Cipher';
import Decyrption from './components/decryption/Decyrption';
import Contact from './components/contact/Contact'
import NavBar from './components/NavBar/NavBar';
function App() {
  return (
    <div className="relative bg-midnight min-w-screen">
      <NavBar/>
      <Hero/> 
    </div>
    <div className="App">
      <Hero/>
      <Cipher/>
      <Decyrption/>
    </div>
  );
}

export default App;
