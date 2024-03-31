import './App.css';

import Navigation from './components/navigation';
import Grid from './components/grid';
import Home from './components/home';
import Contact from './components/contact';

function App() {
  return (
    <>
      <Navigation />
      <div className="main" id="main">
        <Home />
        <Grid/>
        <Contact />
      </div>
    </>
  );
}

export default App;
