import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Shared/Header/Header.js';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import ManageInventory from './components/Pages/ManageInventory/ManageInventory';
import Inventories from './components/Shared/Inventories/Inventories';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Login/Register';
import CarDetails from './components/Pages/CarDetails/CarDetails';
import UpdateQuantity from './components/Pages/UpdateQuantity/UpdateQuantity';
function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth><CarDetails></CarDetails></RequireAuth>
        }></Route>
        <Route path='/inventoryitem' element={
          <RequireAuth><Inventories></Inventories></RequireAuth>
        }></Route>
        <Route path='/updatequantity' element={
          <RequireAuth><UpdateQuantity></UpdateQuantity></RequireAuth>
        }></Route>
        <Route path='/manageinventory' element={
          <RequireAuth><ManageInventory></ManageInventory></RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
