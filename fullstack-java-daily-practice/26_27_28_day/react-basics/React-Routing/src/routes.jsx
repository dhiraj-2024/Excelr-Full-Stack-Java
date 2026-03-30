import React from 'react'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { News } from './pages/News'
import { Navbar } from './components/Navbar'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router'
import { Footer } from './components/Footer'
import { Children } from 'react'

const Layout = () => {
    return
    (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
};

const router = createBrowserRouter(
    [
        {
            path: "/",
            Element: <Layout />,
            children: [
                {
                    path: "/",
                    Element: <Home />
                },
                {
                    path: "/about",
                    Element: <About />
                },
                {
                    path: "/contact",
                    Element: <Contact />
                },
                {
                    path: "/news",
                    Element: <News />
                },
            ],
        },

    ]
    )


const AppRouter = () => {
        return <RouterProvider router={router}/>
    }

export default AppRouter;