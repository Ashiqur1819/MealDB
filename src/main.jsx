import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './components/Home/Home';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Pets from './components/Pets/Pets';
import Details from './components/Details/Details';
import Error from './components/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/pets",
        loader: () =>
          fetch("https://openapi.programming-hero.com/api/peddy/pets"),
        element: <Pets></Pets>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/pet/:petId",
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/peddy/pet/${params.petId}`
          ),
        element: <Details></Details>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
