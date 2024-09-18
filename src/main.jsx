import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import News from "./pages/News.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/news",
                element: <News />,
            },
            {
                path: "/about-us",
                element: <About />,
            },
            {
                path: "/contact-us",
                element: <Contact />,
            }
        ]
    },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
