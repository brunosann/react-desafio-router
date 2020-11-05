import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css'
import Contato from './contato/Contato';
import Produto from './produto/Produto';
import Produtos from './produto/Produtos';

function App() {
  return (
    <React.Fragment>
      
      <BrowserRouter>
      <nav className="container nav-site">
        <NavLink className="btn-nav" to="/" end>Produtos</NavLink>
        <NavLink className="btn-nav" to="contato">Contato</NavLink>
      </nav>
        <Routes>
          <Route path="/" element={<Produtos />} />
          <Route path="produto/:id" element={<Produto />} />
          <Route path="contato" element={<Contato />} />
          <Route path="*" element={<Produtos />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
