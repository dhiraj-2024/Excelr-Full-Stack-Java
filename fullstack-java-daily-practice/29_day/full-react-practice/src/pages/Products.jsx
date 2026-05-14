import React, { useEffect, useState } from 'react'

export const Products = () => {

    const [data, setData] = useState([]);

    const productUrl = "https://dummyjson.com/products";

    useEffect(() => {
        fetch(productUrl)
            .then(res => res.json())
            .then(data => setData(data.products))



    }, []);


    return (
        <>
            <div>Products</div>
            <h1>{data.length > 0 ? "data loaded " : "loading.."}</h1>
            <h3>
                {
                data.map((product) =>
                (
                    <ul key={product.id}>
                        <li>
                            {product.title}
                        </li>
                    </ul>
                )
                )
            }
            </h3>
        </>
    )
}
