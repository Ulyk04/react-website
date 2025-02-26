import Main from './components/Main'
import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import  About  from './components/About';
import Desc from './components/Desc';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element = {<Main/>} />
          <Route path='/about' element = {<About/>} />
          <Route path='/desc' element = {<Desc />} />
        </Routes>
      </div>  
    </Router>
  );
}

export default App;
