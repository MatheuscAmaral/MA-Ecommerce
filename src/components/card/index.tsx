import { MdAddShoppingCart } from "react-icons/md";
import { useContext } from 'react';
import { CartContext } from "../../contexts/CartContext"; 
import { Link } from "react-router-dom";
import { ProductsProps } from "../../pages/home";




export const Card = ({id, cover, title, price, description, amount}: ProductsProps) => {
    const { addItemCart } = useContext(CartContext);

    const addProductCard = (product: ProductsProps) => {
       addItemCart(product);
    }

    return (
        <div className="shadow w-60 p-5 rounded-md">
             <Link to={`/produtos/${id}`}>
                <img className=" cursor-pointer hover:scale-105 transition-all" src={cover}/>
             </Link>

            <h2 className="text-xl font-semibold pb-3">{title}</h2>
            <div className="flex gap-3 items-center justify-between">
                <span className="text-xl text-gray-500 font-semibold">{(
                    price.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL"
                    })
                )}</span>

              
                <button onClick={() => addProductCard({
                    id, cover, title, price, description, amount,
                    product: function (): unknown {
                        throw new Error("Function not implemented.");
                    }
                })} className="text-2xl bg-blue-700 p-1.5 rounded-full">
                    <MdAddShoppingCart color="white"/>
                </button>

            </div>
        </div>
    )
}