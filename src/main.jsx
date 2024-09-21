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
import Construction from "./pages/Construction.jsx";

const router = createBrowserRouter([
    {
        path: "/", // Base path for the application
        element: <App />, // Main application component
        children: [ // Child routes under the base path
            {
                path: "/", // Home route
                element: <Home />, // Component to render for the home route
            },
            {
                path: "/news", // News route
                element: <News />, // Component to render for the news route
            },
            {
                path: "/about-us", // About Us route
                element: <About />, // Component to render for the about us route
            },
            {
                path: "/contact-us", // Contact Us route
                element: <Construction />, // Component to render for the contact us route
            }
        ]
    },
]);

// Render the application using StrictMode for highlighting potential problems
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} /> {/* Provide the router to the app */}
  </StrictMode>,
)
