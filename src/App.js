import './App.css';
import Hero from './components/hero/Hero';
import Contact from './components/contact/Contact'
import NavBar from './components/NavBar/NavBar';
function App() {
  return (
    <div className="relative bg-midnight min-w-screen">
      <NavBar/>
      <Hero/> 
      <Contact/>
    </div>
  );
}

export default App;
