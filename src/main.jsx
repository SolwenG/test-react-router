import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Accueil from './accueil/Accueil';
import Contact from './contact/Contact';
import ErrorPage from './error-page';
import Experience from './experience/Experience';
import './main.css';
import Portfolio from './portfolio/Portfolio';
import Root from './Root';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/accueil",
                element: <Accueil />
            },
            {
                path: "/experience",
                element: <Experience />
            },
            {
                path: "/portfolio",
                element: <Portfolio />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
