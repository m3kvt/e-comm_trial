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


