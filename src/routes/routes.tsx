import { Home } from "../pages/home";
import { Cart } from "../pages/cart";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout";
import { NotFound } from "../pages/notFound";
import { Details } from "../pages/details";


const router = createBrowserRouter([
    {
        element: <Layout/>, 
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/carrinho",
                element: <Cart/>
            },
            {
                path: "/carrinho",
                element: <Cart/>
            },
            {
                path: "/produtos/:id",
                element: <Details/>
            },
            {
                path: "*",
                element: <NotFound/>
            },

        ] 
    }
])

export default router;