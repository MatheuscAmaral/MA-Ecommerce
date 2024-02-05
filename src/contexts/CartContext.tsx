import { createContext, ReactNode, useState } from 'react'
import { ProductsProps } from '../pages/home'
import toast from 'react-hot-toast/headless'

interface CartContextData {
    cart: CartProps[],
    cartAmount: number,
    addItemCart: (newItem: ProductsProps) => void,
    removeItemCart: (product: ProductsProps) => void,
}

export interface CartProps {
    id: number,
    title: string, 
    description: string,
    price: number,
    cover: string,
    amount: number,
    total: number
}

interface CartProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextData);

function CartProvider ({children}: CartProviderProps) {
    const [cart, setCart] = useState<CartProps[]>([])

    const addItemCart = (newItem: ProductsProps) => {
        const checkItemExist = cart.findIndex(c => c.id === newItem.id);

       if(checkItemExist !== -1) {
        let cartList = cart;

        cartList[checkItemExist].amount = cartList[checkItemExist].amount + 1;
        cartList[checkItemExist].total = cartList[checkItemExist].amount * cartList[checkItemExist].price; 
       
        setCart([...cartList]);
        toast.success('Produto adicionado ao carrinho!')
        return;
    }
    
    let data = {
        ...newItem,
        amount: 1,
        total: newItem.price
    }
    
        toast.success('Produto adicionado ao carrinho!')    
        setCart(p => [...p, data])
    }
    
    const removeItemCart = (product: ProductsProps) => {
        const removeItem = cart.findIndex(array => array.id === product.id);
        
        if(removeItem !== -1) {
            
            if(cart[removeItem].amount > 1) {
                cart[removeItem].amount = cart[removeItem].amount - 1; 
                cart[removeItem].total = cart[removeItem].total - cart[removeItem].price; 
                
                setCart([...cart])
                return;
            }
            
            cart.splice(removeItem, 1)
           setCart([...cart])
        }
    }

    return(
        <CartContext.Provider value={{cart, cartAmount: cart.length, addItemCart, removeItemCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;