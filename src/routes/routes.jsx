import { createBrowserRouter, Navigate } from "react-router-dom";

import ElectronicsPage from "../pages/categories/EelectronicsPage";
import FurniturePage from "../pages/categories/MenPage";
import Layout from "../layouts/Layout";
import MenPage from "../pages/categories/MenPage";
import WomenPage from "../pages/categories/WomenPage";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import CartPage from "../pages/cart/CartPage";
import ProductGallery from "../pages/categories/ProductGallery";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // 👈 This handles "/"
        element: <Navigate to="all-products" replace />
      },
      {
        path: "all-products",
        element: <ProductGallery />
      },
      {
        path: "electronics",
        element: <ElectronicsPage/>
      },
      {
        path: "furniture",
        element: <FurniturePage />
      },
      {
        path: "men",
        element: <MenPage />
      },
      {
        path: "women",
        element: <WomenPage/>
      },
      {
        path: ":id",
        element: <SingleProduct/>
      },
      {
        path: "cart",
        element: <CartPage/>
      }
    ]
  }
]);
