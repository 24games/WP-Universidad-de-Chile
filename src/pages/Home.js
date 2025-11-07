import React from 'react';
import ScrollProgress from '../components/ScrollProgress';
import Header from '../components/Header';
import Introduction from '../components/Introduction';
import History from '../components/History';
import Achievements from '../components/Achievements';
import Rivalries from '../components/Rivalries';
import Stadium from '../components/Stadium';
import Players from '../components/Players';
import Culture from '../components/Culture';
import Future from '../components/Future';
import Resources from '../components/Resources';
import Conclusion from '../components/Conclusion';
import Footer from '../components/Footer';
import '../App.css';

const Home = () => {
  return (
    <div className="App">
      <ScrollProgress />
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
        <Resources />
        <Conclusion />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

