import Main from './components/Main'
import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import  About  from './components/About';
import Desc from './components/Desc';
import Organization from './components/Organization';
import Registration from './components/Registration';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element = {<Main/>} />
          <Route path='/about' element = {<About/>} />
          <Route path='/desc' element = {<Desc />} />
          <Route path='/organization' element = {<Organization />} />
          <Route path='/registration' element = {<Registration/>} />
          <Route path='/login' element = {<Login/>} />
          <Route path='dashboard' element = { <ProtectedRoute> <Dashboard /> </ProtectedRoute> } />
        </Routes>
      </div>  
    </Router>
  );
}

export default App;
