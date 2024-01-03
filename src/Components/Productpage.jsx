
import React, { useEffect, useState } from 'react';
import Card from './Card';
import "./Productpage.css"

const Productpage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);
  console.log('products', products);
  return (
    <>
      <div className="productContainer">

        <h2 className='header'>Product Display Page</h2>
        <div className='product-page'>
          <div className="product-list">
            {products.slice(0, 10).map((product) => (
              <Card productDetails={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Productpage;
