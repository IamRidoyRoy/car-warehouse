import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Shared/Header/Header.js';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import ManageInventory from './components/Pages/ManageInventory/ManageInventory';
import Inventories from './components/Shared/Inventories/Inventories';
function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventoryitem' element={<Inventories></Inventories>}></Route>
        <Route path='/manageinventory' element={<ManageInventory></ManageInventory>}></Route>
      </Routes>
    </div>
  );
}

export default App;
