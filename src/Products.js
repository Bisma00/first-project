import React from "react";
import product from "./assets/pngwing.com.png";
import "./products.css";
import Img1 from "./assets/uebergabe-de.webp";
import Img2 from "./assets/ciberseguridad-blog-2.webp";
import Img3 from "./assets/blog-contmatic-com-br.webp";
const Products = () => {
  return (
    <div className="product-main">
      <p className="product-p">Chooose theme preview</p>
      <div className="product-container">
        <div className="product-images">
          <img src={Img1} />
        </div>
        <div className="product-images">
          <img src={Img2} />
        </div>
        <div className="product-images">
          <img src={Img3} />
        </div>
      </div>
    </div>
  );
};

export default Products;
