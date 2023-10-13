import React, { useState } from "react";
import "./App.css";
import CardFecha from "./components/CardFecha";
import CardZodiaco from "./components/CardZodiaco";

function App() {
  const [zodiacoInfo, setZodiacoInfo] = useState(null);

  const handleZodiacoChange = (info) => {
    setZodiacoInfo(info);
  };

  return (
    <div className="container mt-5">
      <h1 className="card">HORÓSCOPOS</h1>
      <CardFecha onZodiacoChange={handleZodiacoChange} />
      <hr />
      {zodiacoInfo && (
        <CardZodiaco
          signo={zodiacoInfo.signo}
          fechaNacimiento={zodiacoInfo.fechaNacimiento}
        />
      )}
    </div>
  );
}

export default App;
