import { useParams } from "react-router-dom"
import { api } from "../../services/api";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ProductsProps } from "../home";
import { MdAddShoppingCart } from "react-icons/md";


export interface ProductProp {
    product: ProductsProps;
}


export const Details = () => {
    const [product, setProduct] = useState<ProductsProps>();
    const { id } = useParams();
    const { cart, addItemCart, removeItemCart } = useContext(CartContext);
    
    
    useEffect(() => {
        const checkProductInCart = cart.find(p => p.id == Number(id));
    
        async function getProductDetails(checkProductInCart?: ProductsProps) {
                if (checkProductInCart) {
                    setProduct(checkProductInCart);
                    return;
                }
    
                const response = await api.get(`/products/${id}`);
                setProduct(response.data);
        }
    
        getProductDetails(checkProductInCart);
    
    }, [cart, id]);
    


    
    const addProductCard = (product: ProductProp) => {
        addItemCart(product.product);
    }
    
    const removeItem = (product: ProductProp) => {
        removeItemCart(product.product)
    }


    return (
       <div className="flex flex-col">
            {
                product && (
                    <div className="flex flex-col lg:flex-row items-center lg:gap-40 p-10 m-auto justify-center my-20 shadow rounded-md lg:w-10/12">
                    <img 
                        src={product?.cover}
                        className="w-96" 
                    />

                    <div className="flex flex-col gap-10 lg:w-4/12">
                        <h1 className="text-3xl font-semibold"> {product?.title} </h1>

                        <strong className="text-3xl font-bold">
                            {
                               product?.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                            }
                        </strong>

                        <p className="text-lg"> {product?.description}</p>

                        {
                            product.amount > 0 ? (
                                <div className="flex gap-5 text-lg shadow w-24 items-center justify-center rounded-full ">
                                    <button onClick={() => removeItem({product})}>-</button>
                                    <span>{product?.amount}</span>
                                    <button onClick={() => addProductCard({product})}>+</button>
                                </div>
                            ) : (
                                <div>
                                    <button onClick={() => addProductCard({product})} className="text-2xl bg-blue-700 p-1.5 rounded-full">
                                        <MdAddShoppingCart color="white"/>
                                    </button>
                                </div>
                            )
                        }
                    </div>
                </div>  
                )
            }
       </div>
    )
}
