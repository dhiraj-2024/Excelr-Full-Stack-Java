import React, { useEffect, useState } from 'react'

export const Posts = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const postUrl = "https://dummyjson.com/posts";
    useEffect(() => {
        const fetchdata = async () => {

            try {
                setLoading(true);
                setError(null);

                const res = await fetch(postUrl);
                if (!res.ok) {
                    throw new Error(`HTTP error status : ${res.status}`);
                }

                const result = await res.json();
                setData(result.posts);
                console.log(result.posts)
            }
            catch (error) {
                setError(error.message);
                console.log(err)
            }
            finally {
                setLoading(false);
            }
        };
        fetchdata();
    }, [])


    return (
        <>
            <div>
                <h1>POSTS</h1>
                <h2>{loading ? "loading..." : "data loaded"}</h2>

                <div>
                    {
                        data.map((post) => {
                         return   (
                                <ul key={post.id}>
                                 <h4>{post.title}</h4>
                                 <p>{post.views}</p>
                                 <p>Tags : {post.tags[0]} </p>
                                </ul>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
