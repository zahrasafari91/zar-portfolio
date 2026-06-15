import './App.css';
import Sidebar from './componets/sidebar/Sidebar';
import Home from './componets/home/Home';
import About from './componets/about/About';
import Experience from './componets/experience/experience';
import Publications from './componets/publications/Publications';

function App() {
  return (
    <>
    <Sidebar />
    <main className='main'>
      <Home />
      <About />
      <Experience />
      <Publications />
    </main>
    </>

  );
}

export default App;
