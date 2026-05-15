import { useEffect, useState } from "react";

function Recipes() {
    // fetching the recipes information 
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const recipesUrl = "https://dummyjson.com/recipes"
    useEffect(() => {
        const fetchRecipesData = async () => {
            try {
                setLoading(true);
                setError(null);
                const res = await fetch(recipesUrl);
                if (!res.ok) {
                    throw new Error(`Error msg : ${res.status}`);
                }
                const result = await res.json();
                setData(result.recipes)
                console.log(result.recipes);

            } catch (error) {
                setError(error.message);
                console.log(error);
                
            } finally {
                setLoading(false)
            }
        };
        fetchRecipesData();
    },[])

    return (
        <>
            <h1>Recipes Mothers Kitchen</h1>
            <h1>{isLoading ? "Loading ..." : "Data Loaded" }</h1>
            <div>{

                data.map((recipe) => {
                    return (
                        <ul key={recipe.id}>
                            <h4>Name : {recipe.name}</h4>
                            <h2>Ingredients:</h2>
                            {
                                recipe.ingredients?.map((ingredient, index) => {
                                    return (
                                        <ul key={index}>
                                            <li>{ingredient }</li>
                                        </ul>
                                    )
                                })
                            }
                        </ul>
                    )
                })
            
            }</div>

        </>
    )
}
export default Recipes;