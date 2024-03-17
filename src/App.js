import './App.css';
import Hero from './components/hero/Hero';
import Cipher from './components/cipher/Cipher';
import Decyrption from './components/decryption/Decyrption';
import Game from './components/game/Game';
function App() {
  return (
    <div className="App">
      <Hero/>
      {/* <Cipher/>
      <Decyrption/> */}
      <Game />
    </div>
  );
}

export default App;
