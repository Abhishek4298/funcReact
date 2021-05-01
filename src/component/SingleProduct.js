const SingleProduct = () => {
	return (
		<>
			<div className="container">
				<div className="card">
					<div className="container-fliud">
						<div className="wrapper row">
							<div className="preview col-md-6">
								<div className="preview-pic tab-content">
									<div className="tab-pane active" id="pic-1"><img src="https://d1whpkioiz600t.cloudfront.net/Images/product/pw-blackforestcake-teddy-basket-redroses.jpg" /></div>
									<div className="tab-pane" id="pic-2"><img src="https://d1whpkioiz600t.cloudfront.net/Images/product/pw-blackforestcake-teddy-basket-redroses.jpg" /></div>
									<div className="tab-pane" id="pic-3"><img src="https://d1whpkioiz600t.cloudfront.net/Images/product/YellowRoseswithKajuSweets.jpg" /></div>
									<div className="tab-pane" id="pic-4"><img src="https://i.pinimg.com/originals/30/87/8e/30878ecaaf68f754400fcf360fa134a6.jpg" /></div>
									<div className="tab-pane" id="pic-5"><img src="https://d1whpkioiz600t.cloudfront.net/Images/product/YellowRoseswithKajuSweets.jpg" /></div>
								</div>
								<ul className="preview-thumbnail nav nav-tabs">
									<li className="active"><a data-target="#pic-1" data-toggle="tab"><img src="https://d1whpkioiz600t.cloudfront.net/Images/product/YellowRoseswithKajuSweets.jpg" /></a></li>
									<li><a data-target="#pic-2" data-toggle="tab"><img src="https://d1whpkioiz600t.cloudfront.net/Images/product/pw-white-carnation-blue-orchid-bouquet.jpg" /></a></li>
									<li><a data-target="#pic-3" data-toggle="tab"><img src="https://d1whpkioiz600t.cloudfront.net/Images/product/pw-white-carnation-blue-orchid-bouquet.jpg" /></a></li>
									<li><a data-target="#pic-4" data-toggle="tab"><img src="https://d1whpkioiz600t.cloudfront.net/Images/product/pw-blackforestcake-teddy-basket-redroses.jpg" /></a></li>
									<li><a data-target="#pic-5" data-toggle="tab"><img src="https://d1whpkioiz600t.cloudfront.net/Images/product/pw-white-carnation-blue-orchid-bouquet.jpg" /></a></li>
								</ul>
							</div>
							<div className="details col-md-6">
								<h3 className="product-title">Flowers</h3>
								<div className="rating">
									<div className="stars">
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star"></span>
										<span className="fa fa-star"></span>
									</div>
									<span className="review-no">41 reviews</span>
								</div>
								<p className="product-description">Fresh red flowers send the clear and powerful message of intense romantic love. Red is the unquestioned color of passion and any red bouquet or red flower arrangement will communicate your strong and powerful love. Red flowers are the closest symbolic likeness to the heart. Red is the color of seduction and desire.
.</p>
								<h4 className="price">current price: <span>INR 180</span></h4>
								<p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
								<h5 className="sizes">sizes:
					<span className="size" data-toggle="tooltip" title="small">s</span>
									<span className="size" data-toggle="tooltip" title="medium">m</span>
									<span className="size" data-toggle="tooltip" title="large">l</span>
									<span className="size" data-toggle="tooltip" title="xtra large">xl</span>
								</h5>
								<div className="action">
									<button className="add-to-cart btn btn-default" type="button">add to cart</button>
									<button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>);
}

export default SingleProduct;