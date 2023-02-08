import { Routes, Route, Outlet, BrowserRouter } from 'react-router-dom';
import Home from './components/Home'
import Search from './components/Search'
import SPF from './components/SPF'
import Bookings from './components/Bookings'
import Login from './components/Login';
import './App.css';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="app">
      
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
            <Route path='search' element={<Search />}></Route>
            <Route path='sprofile' element={<SPF />}></Route>
            <Route path='bookings' element={<Bookings />}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='signup' element={<Signup />}></Route>
          
        </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
