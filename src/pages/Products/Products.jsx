import React, { useState } from "react";
import { data } from "../../data/data";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProduct] = useState(data);

  return (
    <>
      <div className="grid mt-6 xl:mt-16 grid-cols-1 mx-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
