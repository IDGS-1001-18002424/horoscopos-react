import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

// Define la función determinarSignoZodiacal aquí
const determinarSignoZodiacal = (fechaNacimiento) => {
  // Obten la fecha de nacimiento como un objeto Date
  const fechaNac = new Date(fechaNacimiento);

  // Extrae el mes y el día de la fecha de nacimiento
  const mes = fechaNac.getMonth() + 1; // Meses en JavaScript son 0-11, así que sumamos 1
  const dia = fechaNac.getDate();

  // Define los rangos de fechas para cada signo zodiacal (en formato [mesInicio, diaInicio, mesFin, diaFin])
  const rangosSignos = {
    Aries: [3, 21, 4, 19],
    Tauro: [4, 20, 5, 20],
    Géminis: [5, 21, 6, 20],
    Cáncer: [6, 21, 7, 22],
    Leo: [7, 23, 8, 22],
    Virgo: [8, 23, 9, 22],
    Libra: [9, 23, 10, 22],
    Escorpio: [10, 23, 11, 21],
    Sagitario: [11, 22, 12, 21],
    Capricornio: [12, 22, 1, 19],
    Acuario: [1, 20, 2, 18],
    Piscis: [2, 19, 3, 20],
  };

  // Compara la fecha de nacimiento con los rangos de fechas de los signos
  for (const signo in rangosSignos) {
    const rango = rangosSignos[signo];
    const mesInicio = rango[0];
    const diaInicio = rango[1];
    const mesFin = rango[2];
    const diaFin = rango[3];

    // Verifica si la fecha de nacimiento está dentro del rango de fechas para el signo
    if (
      (mes === mesInicio && dia >= diaInicio) ||
      (mes === mesFin && dia <= diaFin) ||
      (mes > mesInicio && mes < mesFin)
    ) {
      return signo;
    }
  }

  return "Signo no encontrado"; // Manejar caso de error
};

function CardFecha({ onZodiacoChange }) {
  const [fechaNacimiento, setFechaNacimiento] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    const signo = determinarSignoZodiacal(fechaNacimiento);

    // Formatea la fecha de nacimiento como "DD/MM/YYYY"
    const fechaFormateada = format(fechaNacimiento, "dd/MM/yyyy");

    onZodiacoChange({
      signo: signo,
      fechaNacimiento: fechaFormateada,
    });
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Ingresa tu fecha de nacimiento</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Fecha de Nacimiento:</label>
            <br></br>
            <DatePicker
              selected={fechaNacimiento}
              onChange={(date) => setFechaNacimiento(date)}
              dateFormat="dd/MM/yyyy" // Formato de fecha "DD/MM/YYYY"
              className="form-control"
            />
          </div>
          <br></br>
          <button type="submit" className="btn btn-primary">
            Obtener Horóscopo
          </button>
        </form>
      </div>
    </div>
  );
}

export default CardFecha;
