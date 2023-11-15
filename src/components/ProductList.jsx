// ProductList.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import RatingStars from "./Rating";
import "./css/ProductList.css";

const ProductList = () => {
  const { nombre } = useParams();
  const navigate = useNavigate();
  const [listProductos, setListProductos] = useState([]);
  const [nombreFiltro, setNombreFiltro] = useState(nombre);

  useEffect(() => {
    searchProducts();
  }, [nombre]);

  const searchProducts = async () => {
    try {
      const response = await axios.get(
        `https://apimocha.com/utlbazar/productos`
      );
      const products = response.data.products;

      let productosFiltrados = [];

      if (nombreFiltro.trim() !== "") {
        productosFiltrados = products.filter((product) =>
          product.title.toUpperCase().includes(nombreFiltro.toUpperCase())
        );
      } else {
        productosFiltrados = products;
      }

      setListProductos(productosFiltrados);
      navigate(`/items/${nombreFiltro}`);
    } catch (error) {
      console.error("Error al obtener datos de la API:", error);
    }
  };

  const handleSearch = () => {
    searchProducts();
  };

  return (
    <div className="product-list-container">
      <div className="search-bar">
        <img
          src="https://cdn.icon-icons.com/icons2/2070/PNG/512/purse_icon_125818.png"
          alt="Bazar Online"
          width="80"
        />
        <h3>Bazar Online</h3>
        <div className="form">
          <input
            type="text"
            className="form-control"
            value={nombreFiltro}
            onChange={(e) => setNombreFiltro(e.target.value)}
            placeholder="Buscar por nombre"
            name="Nombre"
            id="Nombre"
            required
          />
          <button className="btn btn-success" onClick={handleSearch}>
            <i className="bi bi-search"></i> Buscar
          </button>
        </div>
      </div>
      <div className="product-grid">
        {listProductos.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.images[0]} alt="" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text description">{product.description}</p>
              <p className="card-text price">
                Precio: <strong>${product.price}</strong>
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="rating-label">Rating:</span>
                <RatingStars rating={product.rating}></RatingStars>
              </li>
            </ul>
            <div className="card-body">
              <NavLink to={`/item/${product.id}`}>
                <button className="btn btn-outline-primary">Ver detalle</button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
