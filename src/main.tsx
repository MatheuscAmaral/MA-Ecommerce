
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import router from './routes/routes.tsx'
import CartProvider from './contexts/CartContext.tsx'
import { Toaster } from 'react-hot-toast'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <CartProvider>
        <Toaster
            position="top-right"
            reverseOrder={false}
        />


        <RouterProvider router={router} />
    </CartProvider>
)
