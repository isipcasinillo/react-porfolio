
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import './App.css';
import Information from './Components/Information/Information';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className='wrapper'>

        <Information />
      </div>
    </>
  );
}

export default App;
