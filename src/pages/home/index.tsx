import { useState, useEffect } from 'react'
import { Card } from "../../components/card"
import { api } from "../../services/api"


export interface ProductsProps {
    amount: number
    product(product: any): unknown
    id: number, 
    cover: string,
    description: string,
    title: string, 
    price: number
}

export const Home = () => {
    const [products, setProducts] = useState<ProductsProps[]>([]);

    useEffect(() => {
        async function getProducts () {
            const response = await api.get("/products");

            setProducts(response.data)
            console.log(products)
        }

        getProducts()

    }, [])


    return (
        <main className="w-full max-w-7xl px-4 mx-auto flex flex-col gap-10">
            <h1 className="text-2xl text-center font-bold pt-10">Produtos em alta</h1>

            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5 px-10">
              {products.map(p => {
                    return  (
                        <Card 
                            key={p.id}
                            cover={p.cover}
                            id={p.id}
                            title={p.title}
                            price={p.price}
                            description={p.description} 
                            amount={p.amount}
                            product={function (): unknown {
                                throw new Error('Function not implemented.')
                            } }                        />
                    )
                })
              }
            </div>
        </main>
    )
}