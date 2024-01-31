import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Add from './Components/Add';
import Update from './Components/Update';
import Read from './Components/Read';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
        <Route path='/read/:id' element={<Read/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
