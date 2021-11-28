import { Link } from "react-router-dom";

const ProductsWebsite = ({ products }) => {
  return (
    <div style={{marginTop:"50px", margin:"0 auto"}}>
      <div className="container">
        <div className="product-grid row" style={{marginTop:"50px", margin:"0 auto"}}>
          {products &&
            products.map((item, index) => {
              return (
                // <div key={index}>
                //   <h4>
                //     <Link to={`${item.id}`}>{item.name}</Link>
                //   </h4>
                //   <div>{item.price}</div>
                // </div>


                <div className="product-item men col-3" key={index} style={{marginTop:"50px"}}>
                  <div className="product discount product_filter">
                    <div className="product_image">
                      <img src={item.image} alt />
                    </div>
                    <div className="favorite favorite_left" />
                    <div className="product_info">
                      <h6 className="product_name">
                        <a>
                          <Link to={`${item.id}`}>{item.name}</Link>
                        </a>
                      </h6>
                      <div className="product_price">
                        ${item.price}
                      </div>
                    </div>
                  </div>
                  <div className="red_button add_to_cart_button" style={{ width: "100%", float: "right" }}>
                    <a href="#">add to cart</a>
                  </div>
                </div>

              );
            })}
        </div>
      </div>
    </div>
  );
};
export default ProductsWebsite;