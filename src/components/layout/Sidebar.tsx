import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="/">Home</Link>
        <Link to="/Narrative">Narrative</Link>
        <Link to="/Descriptive">Descriptive</Link>
        <Link to="/Informative">Informative</Link>
        <Link to="/Persuasive">Persuasive</Link>
        <Link to="/Procedural">Procedural</Link>
        <Link to="/Opinion">Opinion</Link>
        <Link to="/Literature">Literature</Link>
        <Link to="/Creative">Creative</Link>
        <Link to="/Journal">Journal</Link>
        <Link to="/Letter">Letter</Link>
    </aside>
  );
};

export default Sidebar;
