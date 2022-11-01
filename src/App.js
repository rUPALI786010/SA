import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
