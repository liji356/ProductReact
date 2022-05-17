import logo from './logo.svg';
import './App.css';
import Product from './component/Product';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
     <Route path='/' exact element={<Product/>}/>
   </Routes>
   </BrowserRouter>
   </> 


  );
}

export default App;
