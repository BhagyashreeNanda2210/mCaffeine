import React from "react";

const ProductSection = () => {
  return (
    <main className="product container">
      <div className="product-content">
        <h1>YOUR SKIN DESERVES THE BEST</h1>
        <p>
          THIS WINTER GLOW WITH MCAFFEINE
          <br />
          Retore Moisture And Radiance With Winter Essentials
        </p>
        <div className="productBtn">
          <button>
            <a href="https://www.mcaffeine.com" target="_blank">
              Shop Now
            </a>
          </button>
          <button>
            <a href="https://www.mcaffeine.com" target="_blank">
              Category
            </a>
          </button>
        </div>
        <div className="shopping">
          <p>
            Also available on
            <br />
            <div className="brand-name">
              <a href="https://www.amazon.com">Amazon</a>
            </div>
          </p>
        </div>
      </div>
      <div className="product-image">
        <img src="./images/product-img.jpg" alt="product" />
      </div>
    </main>
  );
};
export default ProductSection;
