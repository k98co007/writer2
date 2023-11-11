import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const menus = [
    "Home",
    "Narrative",
    "Descriptive",
    "Informative",
    "Persuasive",
    "Procedural",
    "Opinion",
    "Literature",
    "Creative",
    "Journal",
    "Letter"
    ];

  return (
    <aside className="sidebar">        
      <nav className='black-nav'>
      <NavLink to="/" className={({isActive}) => "nav-link" + (isActive? "a" : "")}>Home</NavLink>
      <NavLink to="/Narrative" className={({isActive}) => "nav-link" + (isActive? "a" : "")}>Narrative</NavLink>
      <NavLink to="/Descriptive" className={({isActive}) => "nav-link" + (isActive? "a" : "")}>Descriptive</NavLink>
      <NavLink to="/Informative" className={({isActive}) => "nav-link" + (isActive? "a" : "")}>Informative</NavLink>
      <NavLink to="/Persuasive" className={({isActive}) => "nav-link" + (isActive? "a" : "")}>Persuasive</NavLink>
      <NavLink to="/Procedural" className={({isActive}) => "nav-link" + (isActive? "a" : "")}>Procedural</NavLink>
      <NavLink to="/Opinion" className={({isActive}) => "nav-link" + (isActive? "a" : "")}>Opinion</NavLink>
      <NavLink to="/Literature" className={({isActive}) => "nav-link" + (isActive? "a" : "")}>Literature</NavLink>
      <NavLink to="/Creative" className={({isActive}) => "nav-link" + (isActive? "a" : "")}>Creative</NavLink>
      <NavLink to="/Journal" className={({isActive}) => "nav-link" + (isActive? "a" : "")}>Journal</NavLink>
      <NavLink to="/Letter" className={({isActive}) => "nav-link" + (isActive? "a" : "")}>Letter</NavLink>
      </nav>  
    </aside>
  );
};

export default Sidebar;
