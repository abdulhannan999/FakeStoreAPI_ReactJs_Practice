import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = () => {
  const [products, setProducts] = useState([]);
 const [product, setProduct] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
    //   const response = await axios.get("https://api.escuelajs.co/api/v1/products");
     const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  

   const getSingleProduct = async (id) => {
    try {
      console.log("we are here")
    //   const response = await axios.get("https://api.escuelajs.co/api/v1/products");
     const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
     setProduct(response.data)
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  

  return { products, setProducts , product, getSingleProduct};
};

export default useFetchData;
