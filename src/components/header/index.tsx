import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import { IoCart } from "react-icons/io5";
import  logo  from '../../assets/logo-ma.png'



export const Header = () => {
  const { cartAmount } = useContext(CartContext);

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to={"/"} className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src={logo} alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <div className=" lg:flex lg:flex-1 lg:justify-end">
          <Link to={"/carrinho"} className="text-3xl relative">
            <IoCart />
            <span className='absolute text-sm px-1.5 left-5 bottom-4 text-white bg-blue-700 rounded-full'>
                {cartAmount <= 0 ? null: cartAmount}
            </span>
          </Link>
        </div>
      </nav>
    
    </header>
  )
}
