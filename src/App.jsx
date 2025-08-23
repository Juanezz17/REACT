import React from 'react';
import Navbar from './components/barranav';

function App() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Bienvenido a Mi App</h1>
        <p>Aquí inicia tu contenido principal.</p>
      </main>
    </>
  );
}

export default App;

