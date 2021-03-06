import React from 'react';
import './styles/App.css';
import { Header } from './Components/Header'
import { Home } from './Pages/Home'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
