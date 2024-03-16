import './App.css';
import Hero from './components/hero/Hero';
import Cipher from './components/cipher/Cipher';
import Decyrption from './components/decryption/Decyrption';
function App() {
  return (
    <div className="App">
      <Hero/>
      <Cipher/>
      <Decyrption/>
    </div>
  );
}

export default App;
