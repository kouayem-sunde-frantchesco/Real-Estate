import React from 'react';

const Topbar = () => {
  return (
    <header className="topbar">
      <input type="search" placeholder="Rechercher..." />
      <div className="user-info">👤 Admin</div>
    </header>
  );
};

export default Topbar;
