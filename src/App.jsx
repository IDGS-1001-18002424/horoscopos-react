// import React, { useState } from "react";
// import "./App.css";
// import CardFecha from "./components/CardFecha";
// import CardZodiaco from "./components/CardZodiaco";

// function App() {
//   const [zodiacoInfo, setZodiacoInfo] = useState(null);

//   const handleZodiacoChange = (info) => {
//     setZodiacoInfo(info);
//   };

//   return (
//     <div className="container mt-5">
//       <h1 className="card">HORÓSCOPOS</h1>
//       <CardFecha onZodiacoChange={handleZodiacoChange} />
//       <hr />
//       {zodiacoInfo && (
//         <CardZodiaco
//           signo={zodiacoInfo.signo}
//           fechaNacimiento={zodiacoInfo.fechaNacimiento}
//         />
//       )}
//     </div>
//   );
// }

// export default App;
import Busqueda from "./components/SearchBox";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Viewlist from "./components/ProductList";
import DetalleProducto from "./components/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Busqueda />}></Route>
        <Route path="/items/:nombre" element={<Viewlist />}></Route>
        <Route path="/item/:id" element={<DetalleProducto />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
