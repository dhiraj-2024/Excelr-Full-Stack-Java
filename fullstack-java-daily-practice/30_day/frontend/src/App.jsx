import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function App() {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const productFetch = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products")

        setProduct(response.data.products)
        
        console.log(response.data)
      } catch (error) {
        
      }
    }

    productFetch();
  },[])
 
    return (
      <>
        <h1>HEllo </h1>
        <div>
          {
            product.map((product) => {
              return (
                <ul key={product.id}>
                  <li>{product.title}</li>
                </ul>
              )
            })
          }
        </div>
      </>
    )
  }
export default App;