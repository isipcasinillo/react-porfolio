
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import './App.css';
import Information from './Components/Information/Information';
import Education from './Components/Education/Education';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className='wrapper'>
        <Information />
        <Education />
      </div>
    </>
  );
}

export default App;
