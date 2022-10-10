import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import TelaSucesso from './TelaSucesso.js';
import TelaAssentos from './TelaAssentos.js';
import TelaSessoes from './TelaSessoes.js';
import TelaInicial from './TelaInicial.js';

import Header from './layouts/Header.js';

function App() {
  const [reserva, setReserva] = useState(null);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<TelaInicial />} />
        <Route path="/sessoes/:filmeId" element={<TelaSessoes />} />
        <Route
          path="/assentos/:sessaoId"
          element={<TelaAssentos finalizar={reserva => setReserva(reserva)} />}
        />
        <Route path="/sucesso" element={<TelaSucesso reserva={reserva} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;