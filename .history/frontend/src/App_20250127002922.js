import './App.css';

import {Route,Routes} from 'react-router-dom';
import Signup from './components/Signup/Signup';
import {Login} from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Book from './components/Book/Book';
import Admin from './components/Admin/Admin';
import FrontPage from './components/FrontPage/FrontPage';
import Firm from './components/Firms/Firm';
import LawyerHistoryContainer from './components/LawyerHistoryContainer/LawyerHistoryContainer';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/book' element={<Book/>}/>
        <Route path='/' element={<FrontPage/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/firm' element={<Firm/>}/>
        <Route path='/admin/firm' element={<LawyerHistoryContainer/>}/>
        
      </Routes> 
    
    </>
  );
}

export default App;
