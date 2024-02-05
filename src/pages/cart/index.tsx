import { CardCart } from "../../components/cardCart"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"

export const Cart = () => {
    const {cart} = useContext(CartContext);

    return (
        <div className="w-full max-w-7xl px-4 mx-auto ">
            <h1 className=" font-medium text-2xl text-center my-6">Meu carrinho</h1>

            {cart.length <= 0 && (
                <div>
                    <p>Nenhum produto adicionado ao carrinho</p>
                </div>
            )}
        
            {
                cart.map(c => {
                    return (
                        <CardCart
                            key={c.id}
                            cover={c.cover}
                            total={c.total}
                            amount={c.amount}
                            id={c.id}
                            title={c.title}
                            description={c.description}
                            price={c.price}
                        /> 

                    )
                    
                })
            }
            
            {/* <p className='font-medium text-lg my-3'>{total}</p> */}
        </div>
    )
}