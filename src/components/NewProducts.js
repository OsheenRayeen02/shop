import star2 from '../images/Star 2.png';
import React, { useState, useEffect } from 'react';
function NewProducts() {
  const nplblist = [
    { title: 'Apparel', id: '1', },
    { title: 'Accessories', id: '2', },
    { title: 'Best sellers', id: '3', },
    { title: '50% off', id: '4', }
  ]
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define a function to fetch the product data
    async function fetchProductData() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data); // Update the state with the product data
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error:', error);
        setLoading(false); // Set loading to false on error
      }
    }

    fetchProductData(); // Call the function to fetch data when the component mounts
  }, []);

  return (
    <>
      <div className="NewProducts dpFlex">
        <div className='NewProductsHeading'>
          <h2>New products</h2>
          <div className="Star2Line"></div>
          <div className="Star2Img">
            <img src={star2} alt="star2" />
          </div>
        </div>
        <div className='ArrowsToSLides'></div>
      </div>
      <div className='NewproductsLowBox'>
        <div className='NPLBleft'>
          {nplblist.map((list) => (
            <div className='Cat-List' key={list.id}>
              <a href='/'>{list.title}</a>
            </div>
          ))}
        </div>
        <div className='NPLright'>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className='rightList'>
              <div className='productsListItems'>
                {products.map((product) => (
                  <div className='ProductsBox' key={product.id}>
                    <div className='ProductsImgs' >
                      <img src={product.image} alt='img' />
                    </div>
                    <div className='NameAndPrice'>
                      <h4>{product.title}</h4>
                      <p>{product.description}</p>
                      <h5> ${product.price}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}


export default NewProducts;