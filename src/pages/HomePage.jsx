import { Header } from '../components/Header';
import axios from 'axios';
import './HomePage.css'
import { useEffect, useState } from 'react';
import { Product } from './Product';

export function HomePage({cart,loadCart}) {

    //este fetch es con promesas sin usar axios
    // fetch('http://localhost:3000/api/products')
    //     .then((response)=>{
    //         return response.json();
    //     }).then((data)=>{
    //         console.log(data)
    //     })

    // //este usando async/await
    // async function getProducts() {
    // try {
    //     const response = await fetch(
    //         'http://localhost:3000/api/products'
    //     );

    //     const data = await response.json();

    //     console.log(data);
    //     } catch (error) {
    //     console.error(error);
    //     }
    // }

    //getProducts()

    //como se hace async await usando useEffect
    useEffect(()=>{
        const getHomeData = async () =>{
            const response = await axios.get('http://localhost:3000/api/products');
            setProducts(response.data)
        }

        getHomeData();
    },[])

    //este usando axios
    //lo metemos en un use effect para controlar cuando lo ejecutamos y metemos los datos en un useState

    const[products,setProducts] = useState([]);
   
    // useEffect(()=>{
    //     axios.get('http://localhost:3000/api/products')
    //         .then((response)=>{
    //             setProducts(response.data)
    //         })
    // },[])


    return (
        <>
            <title>Ecommerce Project</title>
            <Header cart={cart} />

            <div className="home-page">
                <div className="products-grid">
                    {products.map((product) => {
                        return(
                            <Product key={product.id} product={product} loadCart={loadCart} />
                        )
                    })}
                </div>
            </div>
        </>
    );
}