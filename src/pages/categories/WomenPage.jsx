import { Link } from "react-router-dom";
import Loader from "../../components/Loader";

import useCart from "../../hooks/useCart";
import { useProductContext } from "../../context/ProductContext";
import { toast } from "react-toastify";



const WomenPage= () => {
  const { products } = useProductContext();
    const [cart, dispatch] = useCart(); 
   const handleAddToCart = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
    toast.success(`${product.title} added to cart!`, {
    position: "top-right",
  });
  };

  return (
    <>
      {products.length === 0 ? (
        <div className="flex justify-center items-center min-h-screen">
          <Loader />
        </div>
      ) : (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {products
                .filter((x) => x.category.toLowerCase() === "women's clothing")
                .map((product) => (
                  <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <div className="h-full flex flex-col justify-between border rounded-lg p-4 shadow hover:shadow-md bg-white transition-transform duration-300 hover:scale-105">
                      <div className="relative h-48 w-full overflow-hidden rounded">
                        <img
                          alt={product.title}
                          src={product.image}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="mt-4 flex-grow">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                          {product.category?.name}
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium line-clamp-2">
                          {product.title}
                        </h2>
                        <p className="mt-1 font-semibold">${product.price}</p>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <button
                        className="flex-1 bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700 text-sm"
                        onClick={() => handleAddToCart(product)} // ✅
                      >
                        Add to Cart
                      </button>
      <Link
                        to={`/${product.id}`}
                        className="flex-1 border border-gray-400 text-gray-700 py-1 px-3 rounded hover:bg-gray-100 text-sm text-center"
                      >
                        View
                      </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default WomenPage;
