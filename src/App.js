import logo from './logo.svg';
import './App.css';
import Product from './component/Product';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './component/Search';
import Display from './component/Display';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
     <Route path='/' exact element={<Product/>}/>
     <Route path='/search' exact element={<Search/>}/>
     <Route path='/display' exact element={<Display/>}/>
   </Routes>
   </BrowserRouter>
   </> 


  );
}

export default App;
