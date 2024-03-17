import './App.css';
import Hero from './components/hero/Hero';
import Cipher from './components/cipher/Cipher';
import Decyrption from './components/decryption/Decyrption';

import Form from './components/form/Form';
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <div className="relative bg-midnight min-w-screen">
      <NavBar/>
      <Hero/> 
    </div>
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/try' element={<Form/>}/>
          <Route path='/encrypt' element={<Cipher/>}/>
          <Route path='/decrypt' element={<Decyrption/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Hero/>
      <Form/>
      <Cipher/>
      <Decyrption/> */}

    </div>
  );
}

export default App;
