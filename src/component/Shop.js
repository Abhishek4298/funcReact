import React from 'react';
import { Link } from "react-router-dom";

const Shop = ({ shop_page }) => {
	return (
		<>
			<div className="container mt-2">
				<div className="row">
					{
						shop_page.map((shop) => {
							return (
								<div className="col-md-3 col-sm-6 item" >
									<div className="card item-card card-block">
										<h4 className="item-card-title text-right"><i className="material-icons">{shop.sh_title}
										</i></h4>
										{shop.sh_image}
										<h5 className="card-title  mt-3 mb-3">{shop.sh_name}</h5>
										<p className="card-text">This is Link company that builds websites, web .</p>
										<Link to="/singleProduct" className="btn btn-primary sm">Buy</Link>
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
		</>
	);
}

export default Shop;