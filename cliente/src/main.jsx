import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes, BrowserRouter } from 'react-router-dom';

import App from './App.jsx'
import MovimentoContabil from './MovimentoContabil.jsx'
import TabelaMovimento from './TabelaMovimento.jsx';
import EscrituraFiscal from './EscrituraFiscal.jsx'
import TabelaEscritura from './TabelaEscritura.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/movimento" element={<MovimentoContabil />} />
          <Route path="/tabela-movimento" element={<TabelaMovimento />} />
          <Route path="/escritura" element={<EscrituraFiscal /> }/>
          <Route path="/tabela-escritura" element={<TabelaEscritura /> }/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
