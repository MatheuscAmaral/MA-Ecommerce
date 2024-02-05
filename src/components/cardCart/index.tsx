import { CartProps } from "../../contexts/CartContext"
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext"; 
import { ProductsProps } from "../../pages/home";

export const CardCart = ({cover, total, amount, id, description, title, price}: CartProps) => {
    const { addItemCart, removeItemCart } = useContext(CartContext)

    const addProductCard = (product: ProductsProps) => {
        addItemCart(product);
    }

    const removeItem = (product: ProductsProps) => {
        removeItemCart(product)
    }

    return (
        <section className="flex items-center justify-between border-b-2 border-gray-'100'">
            <Link to={`/produtos/${id}`}>
                <img 
                    src={cover} 
                    className='w-28 hover:scale-105 transition-all'/>
            </Link>
            <strong> Preço: {(
                price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL"
                })
            )}</strong>

            <div className='flex gap-2 items-center'>
                    <button className='bg-blue-700 px-2.5 h-6 text-white  rounded-md flex items-center justify-center' onClick={() => removeItem({
                        id, cover, description, title, price, amount,
                        product: function (): unknown {
                            throw new Error("Function not implemented.");
                        }
                    })}>-</button>
                    <span className='text-lg'>{amount}</span>
                    <button className='bg-blue-700 px-2 h-6 text-white  rounded-md  flex items-center justify-center' onClick={() => addProductCard({
                        id, cover, description, title, price, amount,
                        product: function (): unknown {
                            throw new Error("Function not implemented.");
                        }
                    })}>+</button>
            </div>      

            <strong>SubTotal: {(
                total.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL"
                })
            )}</strong>
        </section>
    )
}