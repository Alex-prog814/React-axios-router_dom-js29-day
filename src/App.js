import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import EditForm from './components/EditForm';
import Details from './components/Details';
import AddForm from './components/AddForm';
import axios from 'axios';

const App = () => {
  const API = 'http://localhost:8000/products';

  const [products, setProducts] = useState([]);

  function addProduct(newProduct) {
    axios.post(API, newProduct);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<AddForm addProduct={addProduct} />} />
        <Route path="/edit/:id" element={<EditForm />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/contacts" element={<h1>Contacts</h1>} />
      </Routes>
      <h2>Footer</h2>
    </>
  )
}

export default App