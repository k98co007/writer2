import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Home from './components/home/Home';
import Narrative from './components/narrative/Narrative';
import Descriptive from './components/descriptive/Descriptive';
import Informative from './components/informative/Informative';
import Persuasive from './components/persuasive/Persuasive';
import Procedural from './components/procedural/Procedural';
import Opinion from './components/opinion/Opinion';
import Literature from './components/literature/Literature';
import Creative from './components/creative/Creative';
import Journal from './components/journal/Journal';
import Letter from './components/letter/Letter';

import './App.css';

const App: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>('home');

  return (
    <div className="App">
      <Header />
      <div className="MainContent">
        <Router>
        <Sidebar/>
        <main className='content-area'>
           <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Narrative" element={<Narrative />} />
            <Route path="/Descriptive" element={<Descriptive />} />
            <Route path="/Informative" element={<Informative />} />
            <Route path="/Persuasive" element={<Persuasive />} />
            <Route path="/Procedural" element={<Procedural />} />
            <Route path="/Opinion" element={<Opinion />} />
            <Route path="/Literature" element={<Literature />} />
            <Route path="/Creative" element={<Creative />} />
            <Route path="/Journal" element={<Journal />} />
            <Route path="/Letter" element={<Letter />} />
          </Routes>
        </main>
      </Router>
      </div>
    </div>
  );
}

export default App;
