import { useState } from "react";
import '../assets/css/inputs.css'

const Inputs = () => {
  const [hidden, setHidden] = useState(true);
  const [porcentaje, setPorcentaje] = useState('');
  const [precio, setPrecio] = useState('');
  const [error, setError] = useState(false);

  function verificar() {
    if (porcentaje === '' || precio === '') {
      setError("Por favor rellene todos los campos");
    }if(porcentaje < 0 || precio < 0){
      setError("No pueden ser negativos");
    }
  }
  function evaluar(opcion) {
    if (opcion === "descuento") {
      setHidden(false);
    }else{
      setHidden(true);
    }
  }
  return (
    <>
      <div className="fondo flex justify-center items-center flex-col bg-slate-900  h-[calc(100vh-6rem)]">
        <h4 className="text-2xl text-amber-100 bg-slate-800 py-3 px-5 rounded-3xl ">Seleccione el descuento que desea aplicar</h4>
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
        <p>{error && error} </p>
        <h4 className="text-2xl text-amber-100 bg-slate-800 py-3 px-5 rounded-3xl ">Ingrese el precio del producto</h4>
        <input
          type="number"
          placeholder="Ingrese el precio del producto"
          className="w-1/2 border-2 border-gray-300 rounded-md p-2 m-2"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <button className="w-1/4  text-slate-900 font-bold tracking-wide  rounded-md p-2 m-2 bg-green-500 hover:bg-green-700 hover:text-gray-200">
          Calcular
        </button>
      </div>

    </>
  );
};

export default Inputs;