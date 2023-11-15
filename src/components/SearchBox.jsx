// SearchBox.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/SearchBox.css";

const SearchBox = () => {
  const [nombre, setNombre] = useState("");

  const handleSearch = () => {
    // Implementa la lógica de búsqueda aquí si es necesario
  };

  return (
    <div className="search-container">
      <div className="logo-container">
        <img
          src="https://cdn.icon-icons.com/icons2/2070/PNG/512/purse_icon_125818.png"
          alt="Bazar Online"
          width="80"
        />
        <h1>Bazar Online</h1>
      </div>
      <div className="form-container">
        <input
          type="text"
          className="form-control"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Buscar por nombre"
          name="Nombre"
          id="Nombre"
          required
        />
        <NavLink to={`/items/${nombre}`}>
          <button className="search-btn" onClick={handleSearch}>
            <i className="bi bi-search"></i> Buscar
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default SearchBox;
