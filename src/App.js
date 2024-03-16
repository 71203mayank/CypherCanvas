import './App.css';
import Hero from './components/hero/Hero';
import Cipher from './components/cipher/Cipher';
function App() {
  return (
    <div className="bg-midnight min-w-screen min-h-screen">
      <Hero/> 
    </div>
    <div className="App">
      <Cipher/>
    </div>
  );
}

export default App;
