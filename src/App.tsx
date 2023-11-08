import React, { useState } from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import ContentArea from './components/layout/ContentArea';
import './App.css';

const App: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>('home');

  return (
    <div className="App">
      <Header />
      <div className="MainContent">
        <Sidebar/>
        <ContentArea />
      </div>
    </div>
  );
}

export default App;
