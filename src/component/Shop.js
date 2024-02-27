import React from "react";
import { Link } from "react-router-dom";

const Shop = ({ shop_page }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {shop_page.map((shop, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card h-100">
              <img
                src={shop?.sh_image.props.src}
                className="card-img-top"
                alt={shop.sh_name}
              />
              <div className="card-body">
                <h5 className="card-title">{shop.sh_name}</h5>
                <p className="card-text">
                  This is a description of the product. You can add more details
                  here.
                </p>
              </div>
              <div className="card-footer">
                <Link to="/singleProduct" className="btn btn-primary btn-block">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
