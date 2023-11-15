// DetalleProducto.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import RatingStars from "./Rating";
import "./css/ProductDetail.css";

const DetalleProducto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producSelected, setProducSelected] = useState({});
  const [imagesProduct, setImagesProduct] = useState([]);
  const { nombre } = useParams();
  const [nombreFiltro, setNombreFiltro] = useState(nombre);
  const [listProductos, setListProductos] = useState([]); // Agrega esta línea

  useEffect(() => {
    searchProduct(id);
  }, [id]);

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

      setListProductos(productosFiltrados); // Cambia aquí
      navigate(`/items/${nombreFiltro}`);
    } catch (error) {
      console.error("Error al obtener datos de la API:", error);
    }
  };

  const handleSearch = () => {
    searchProducts();
  };

  const searchProduct = async () => {
    try {
      const response = await axios.get(
        `https://apimocha.com/utlbazar/productos`
      );
      const products = response.data.products;
      let producto = products.find((product) => product.id === parseInt(id));

      if (!producto) {
        console.error("Producto no encontrado");
        navigate("/", { replace: true });
        return;
      }

      setProducSelected(producto);
      setImagesProduct(producto.images);
    } catch (error) {
      console.error("Error al obtener datos de la API:", error);
    }
  };
  return (
    <div className="detalle-producto-container">
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
      <div className="carousel-container">
        <div
          id="carousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000" // Cambia aquí el intervalo a tu preferencia en milisegundos
        >
          <div className="carousel-inner">
            {imagesProduct.map((image, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <img
                  src={image}
                  className="d-block w-100"
                  alt={`Slide ${index}`}
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="card producto-card">
        <div className="card-body">
          <h5 className="card-title text-black">{producSelected.title}</h5>
          <p className="card-text text-black">{producSelected.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-black">
            <span className="precio-label">Precio:</span>
            <strong>${producSelected.price}</strong>
          </li>
        </ul>
        <div className="card-body d-flex justify-content-between">
          <div className="d-flex justify-content-between align-items-center">
            <RatingStars rating={producSelected.rating}></RatingStars>
          </div>
          <button className="btn btn-success">Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;
