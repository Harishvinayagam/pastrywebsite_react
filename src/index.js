import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/aboutus", element: <AboutUs /> },
      { path: "/services", element: <Services /> },
      { path: "/contactus", element: <ContactUs /> },
    ],
  },
]);

function Index() {
  return <RouterProvider router={router} />;
}

// Use createRoot for React 18
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Index />);
