
import logo from '../assets/img/dolar-rem.png';
const header = () => {

    return (
        <>
            <header className="bg-green-700  flex justify-center items-center">
            <img src={logo} className='w-20' alt="Logo" />
                <h1 className="text-3xl font-bold text-amber-500 text-center">Descuentos en el Super</h1>
                <img src={logo} className='w-20' alt="Logo" />
            </header>
        </>
    )
}

export default header;