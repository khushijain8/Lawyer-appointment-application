import './App.css';

import {Route,Routes} from 'react-router-dom';
import Signup from './components/Signup/Signup';
import {Login} from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Book from './components/Book/Book';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/book' element={<Book/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes> 
    
    </>
  );
}

export default App;
