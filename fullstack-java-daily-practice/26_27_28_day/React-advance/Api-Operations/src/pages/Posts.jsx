import React, { useState, useEffect } from 'react';
import { Loader } from '../components/Loader';

export const Posts = () => {

    const [posts, setPosts] = useState([]);
    const[ loading , setLoading]= useState(false)

    useEffect(() => {
        setLoading(true)
        getPostData();
    }, []);

    async function getPostData() {
        const url = "http://localhost:3000/posts";
        let response = await fetch(url);
        response = await response.json();
        setPosts(response);
        setLoading(false)
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Posts Data</h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {
                    !loading ?
                    posts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition duration-300"
                    >
                        <h2 className="text-xl font-semibold mb-3 text-gray-800">
                            {post.title}
                        </h2>

                        <div className="flex justify-between items-center text-gray-600">
                            <span className="text-sm">👁 Views</span>
                            <span className="font-bold text-blue-500">
                                {post.views}
                            </span>
                        </div>
                    </div>
                    ))
                    : <Loader/>
                }
            </div>
        </div>
    );
};