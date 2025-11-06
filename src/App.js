import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import History from './components/History';
import Achievements from './components/Achievements';
import Rivalries from './components/Rivalries';
import Stadium from './components/Stadium';
import Players from './components/Players';
import Culture from './components/Culture';
import Future from './components/Future';
import Conclusion from './components/Conclusion';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Introduction />
        <History />
        <Achievements />
        <Rivalries />
        <Stadium />
        <Players />
        <Culture />
        <Future />
        <Conclusion />
      </main>
      <Footer />
    </div>
  );
}

export default App;

