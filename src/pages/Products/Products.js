import product_card from "../data/product_data";
import './Products.css'
import {Link} from 'react-router-dom';

const Products = () => {
  console.log(product_card);
  const listItems = product_card.map((item) => (
    <div className="container">
      <div className="card" key={item.id}>
        <div className="card-content">
        <div className='image'>
          <img src={item.thumb} alt="plant"/>
        </div>
        <div className='product'>
          <span className='name'>{item.product_name}</span>
          <span className='desc'>{item.description}</span>          
          <span className="price">{item.price}</span>
        </div>
        <div className='button'>
          <button className='more'>
            <a href="/Product_details"><Link to="/product_details" className="link-cursor">More info</Link></a>
          </button>
          <button className='cart'>
            <a href="/cart"><Link to="/cart" className="link-cursor">Add to cart</Link></a>
          </button>
        </div>
        </div>
      </div>
    </div>
    
  ));
  return (
    <section>
    <div className="products">
      <h2>AVAILABLE PLANTS</h2>
      <p>Spare some to go through our plant buddies</p>
      <div className="content">
        {listItems}
      
      </div>
      
    </div>
    </section>
  );
};
export default Products;




{/*
<div className="card_img">
        <img src={item.thumb} alt=""/>
      </div>
      <div className="card_header">
        <h3>{item.product_name}</h3>
        <p>{item.description}</p>
        <p className="price">
          {item.price}
          <span>{item.currency}</span>
        </p>
        <div className="btn">Add to cart</div>
      </div>



import React from 'react'
import product_card from "../data/product_data";
import './Products.css'

const Products = () => {
  return (
    <section>
      <div className='swiper mySwiper container'>
        <h2>OUR PRODUCTS</h2>
        <p>Spare some to go through our plant buddies</p>
        <div className='swiper-wrapper content'>
          <div className='swiper-slide card'>
            <div className='card-content'>
              <div className='image'>
                <img src='assets/bg1.jpg' alt="plant"/>
              </div>
              <div className='product'>
                <span className='name'>1st product</span>
                <span className='desc'>description</span>
              </div>
              <div className='button'>
                <button className='more'>More info</button>
                <button className='cart'>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </section>
  )
}

export default Products;

<Link to="/Product/Product_details">
      <button className='more'>More info</button>
      </Link>

*/}