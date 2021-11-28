import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { read } from "../../api/productAPI";

const ProductDetail = (props) => {
  // lấy ID từ url
  const { id } = useParams(); // { id: }
  const [products, setProducts] = useState({});

  useEffect(() => {
    read(id).then((response) => {
      // lấy dữ liệu từ API thông qua ID
      // thành công thì set dữ liệu lấy được vào state product và show
      setProducts(response.data);

    });
  }, [id]);

  return (
    products && (
      // <div>
      //   <h2>{products.name}</h2>
      //   <img src={products.image} alt={products.name} />
      // </div>
      <div style={{ marginTop: "50px" }}>
        <div className="row">
          <div className="col-lg-7">
            <div className="single_product_pics">
              <div className="row">
                <div className="col-lg-3 thumbnails_col order-lg-1 order-2">
                  <div className="single_product_thumbnails">
                    <ul>
                      <li>
                        <img src={products.image} alt={products.name} />
                      </li>
                      <li className="active">
                        <img src={products.image} alt={products.name} />
                      </li>
                      <li>
                        <img src={products.image} alt={products.name} />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-9 image_col order-lg-2 order-1">
                  <div className="single_product_image">
                    <div
                      className="single_product_image_background"
                      style={{ backgroundImage: "url={products.image} alt={products.name}" }}
                    />
                    <img src={products.image} alt={products.name} width="560px" height="431px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="product_details">
              <div className="product_details_title">
                <h2>{products.name}</h2>
                <p>
                  Nam tempus turpis at metus scelerisque placerat nulla deumantos
                  solicitud felis. Pellentesque diam dolor, elementum etos lobortis des
                  mollis ut...
                </p>
              </div>
              <div className="free_delivery d-flex flex-row align-items-center justify-content-center">
                <span className="ti-truck" />
                <span>free delivery</span>
              </div>
              <div className="product_price" style={{float: "left" }}>${products.price}
                <ul className="star_rating">
                  <li>
                    <i className="fa fa-star" aria-hidden="true" />
                  </li>
                  <li>
                    <i className="fa fa-star" aria-hidden="true" />
                  </li>
                  <li>
                    <i className="fa fa-star" aria-hidden="true" />
                  </li>
                  <li>
                    <i className="fa fa-star" aria-hidden="true" />
                  </li>
                  <li>
                    <i className="fa fa-star-o" aria-hidden="true" />
                  </li>
                </ul>
              </div><br />
              <div className="product_color">
                <span  style={{float: "left" }}>Select Color:</span>
                <ul  style={{ float: "left" }}>
                  <li style={{ background: "#e54e5d" }} />
                  <li style={{ background: "#252525" }} />
                  <li style={{ background: "#60b3f3" }} />
                </ul>
              </div>
              <div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">
                <span>Quantity:</span>
                <div className="quantity_selector">
                  <span className="minus">
                    <i className="fa fa-minus" aria-hidden="true" />
                  </span>
                  <span id="quantity_value">1</span>
                  <span className="plus">
                    <i className="fa fa-plus" aria-hidden="true" />
                  </span>
                </div>
                <div className="product_favorite d-flex flex-column align-items-center justify-content-center" />
              </div><br />
              <div className="btn btn-danger" style={{ width:"525px", float:"left"}}>
                <a href="#" style={{ color:"#fff"}}><strong>ADD TO CART</strong></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default ProductDetail;