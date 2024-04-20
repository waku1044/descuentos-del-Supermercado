
import logo from '../assets/img/dolar-rem.png';
import '../assets/css/header.css';
const header = () => {

    return (
        <>
            <header className="header flex  items-center">
            {/* <img src={logo} className='w-20' alt="Logo" /> */}
                <h1 className="text-3xl font-bold text-slate-800  text-center ps-10">Descuentos en el Super</h1>
                {/* <img src={logo} className='w-20' alt="Logo" /> */}
            </header>
        </>
    )
}

export default header;