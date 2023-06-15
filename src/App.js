import './App.css';
import { React } from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './components/Layout/HomePage';
import Table from './components/UI/Table';
import CartProvider from './components/store/CartProvider';

const router = createBrowserRouter([
  {path: '/', element: <HomePage/>},
  {path: '/table', element: <Table/>}
]);

function App() { 
  return( 
  <CartProvider>
    <RouterProvider router={router}/>
  </CartProvider>
  )
}

export default App;
