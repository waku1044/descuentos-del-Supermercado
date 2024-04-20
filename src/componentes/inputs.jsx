import { useState } from "react";
import "../assets/css/inputs.css";

const Inputs = () => {
  const [hidden, setHidden] = useState(true);
  const [aplica, setAplica] = useState("trespordos");
  const [porcentaje, setPorcentaje] = useState("");
  const [precio, setPrecio] = useState("");
  const [error, setError] = useState({});
  const [mostrar, setMostrar] = useState("");

  function verificar() {
    let errorList = {};
    if(hidden){
      if (precio === "") {
        errorList = { ...errorList, precio: "Por favor rellene el campo" };
      }
      if (precio < 0) {
        errorList = { ...errorList, precio: "No pueden ser negativos" };
      }

    }else{
      if (precio === "") {
        errorList = { ...errorList, precio: "Por favor rellene el campo" };
      }
      if (precio < 0) {
        errorList = { ...errorList, precio: "No pueden ser negativos" };
      }
      if (porcentaje === "") {
        errorList = { ...errorList, porcentaje: "Por favor rellene el campo" };
      }
      if (porcentaje < 0) {
        errorList = { ...errorList, porcentaje: "No pueden ser negativos" };
      }

    }
    return errorList;
  }
  function sinInputPorcentaje() {
    var debePagar = 0;
    var msj = "";
    console.log(porcentaje);
    console.log(precio);
    console.log(aplica)
    switch (aplica) {
      case "trespordos":
        debePagar = precio * 2 ;
        msj = `El total a pagar es: $${debePagar}.
        \n
        Estarias llevando 3 productos al precio de $${
          (debePagar / 3).toFixed(2)
        } cada uno.
        `;
        break;
        case "ochenta":
        var des = precio * 0.8;
        debePagar = precio * 2 - des;
        msj = `El total a pagar es: $${debePagar}.\n
        Estarias llevando 2 productos al precio de $${
          debePagar / 2
        } cada uno.`;
        break;
      case "setenta":
        des = precio * 0.7;
        debePagar = precio * 2 - des;
        msj = `El total a pagar es: $${debePagar}.\n
        Estarias llevando 2 productos al precio de $${
          debePagar / 2
        } cada uno.`;

        break;
      case "cincuenta":
        des = precio * 0.5;
        debePagar = precio * 2 - des;
        msj = `El total a pagar es: $${debePagar}.
        Estarias llevando 2 productos al precio de $${
          debePagar / 2
        } cada uno.`;
        break;
      case "descuento":
        debePagar = (precio * porcentaje) / 100;
        msj = `El total a pagar es: $${debePagar}.`;
        break;
      default:
        msj = "Surgio un error en la aplicacion.";
    }
    setMostrar(msj);
    console.log(msj);
  }
  function evaluar(opcion) {
    if (opcion === "descuento") {
      setHidden(false);
    } else {
      setHidden(true);
    }

    setAplica(opcion);
  }

  function handleSend(e) {
    e.preventDefault();
    setError({});
    let response = verificar();
    
    if (Object.keys(response).length < 1) {
      sinInputPorcentaje();
      
    } else {
      setError(response);
    }
  }
  return (
    <>
      <div className="fondo flex justify-center items-center flex-col bg-slate-900 py-12">
        <h4 className="text-md lg:text-2xl text-amber-100 bg-slate-800 py-3 px-5 rounded-3xl ">
          Seleccione el descuento que desea aplicar
        </h4>
        <select
          className="w-1/2 border-2 border-gray-300 rounded-md p-2 m-2"
          onChange={(e) => evaluar(e.target.value)}
        >
          <option value="trespordos">3 x 2</option>
          <option value="ochenta">80% en la segunda unidad</option>
          <option value="setenta">70% en la segunda unidad</option>
          <option value="cincuenta">50% en la segunda unidad</option>
          <option value="descuento">% de descuento</option>
        </select>
        <input
          hidden={hidden}
          type="number"
          placeholder="Ingrese el porcentaje de descuento"
          className="w-1/2 border-2 border-gray-300 rounded-md p-2 m-2"
          value={porcentaje}
          onChange={(e) => setPorcentaje(e.target.value)}
        />
        {error.porcentaje && <p className="text-black  bg-red-500 px-5 py-1 rounded-3xl">{error.porcentaje}</p>}
        <h4 className="text-md lg:text-2xl text-amber-100 bg-slate-800 py-4 px-5 rounded-3xl ">
          Ingrese el precio del producto
        </h4>
        <input
          type="number"
          placeholder="Ingrese el precio del producto"
          className="w-1/2 border-2 border-gray-300 rounded-md p-2 m-2"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        {error.precio && <p className="text-black  bg-red-500 px-5 py-1 rounded-3xl">{error.precio}</p>}
        <button
          className="w-1/4  text-slate-900 font-bold tracking-wide  rounded-md p-2 m-2 bg-green-500 hover:bg-green-700 hover:text-gray-200"
          onClick={handleSend}
        >
          Calcular
        </button>

        {mostrar && (<h2 className="text-md lg:text-2xl text-amber-100 bg-slate-800 py-4 px-5 rounded-3xl ">{mostrar}</h2>)}
      </div>
    </>
  );
};

export default Inputs;
