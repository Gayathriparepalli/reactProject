import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { allProducts } from "../redux/actions/ProductActions";
import DisplayProducts from "./DisplayProducts";

const ProductList = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const getData = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => dispatch(allProducts(res.data)))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (products.length === 0) {
      getData();
    } else {
      console.log(products);
    }
  }, []);

  return (
    <div>
      <DisplayProducts />
    </div>
  );
};

export default ProductList;
