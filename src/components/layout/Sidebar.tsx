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
      <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
      <NavLink to="/Narrative" className={({ isActive }) => isActive ? "active" : ""}>Narrative</NavLink>
      <NavLink to="/Descriptive" className={({ isActive }) => isActive ? "active" : ""}>Descriptive</NavLink>
      <NavLink to="/Informative" className={({ isActive }) => isActive ? "active" : ""}>Informative</NavLink>
      <NavLink to="/Persuasive" className={({ isActive }) => isActive ? "active" : ""}>Persuasive</NavLink>
      <NavLink to="/Procedural" className={({ isActive }) => isActive ? "active" : ""}>Procedural</NavLink>
      <NavLink to="/Opinion" className={({ isActive }) => isActive ? "active" : ""}>Opinion</NavLink>
      <NavLink to="/Literature" className={({ isActive }) => isActive ? "active" : ""}>Literature</NavLink>
      <NavLink to="/Creative" className={({ isActive }) => isActive ? "active" : ""}>Creative</NavLink>
      <NavLink to="/Journal" className={({ isActive }) => isActive ? "active" : ""}>Journal</NavLink>
      <NavLink to="/Letter" className={({ isActive }) => isActive ? "active" : ""}>Letter</NavLink>
    </aside>
  );
};

export default Sidebar;
