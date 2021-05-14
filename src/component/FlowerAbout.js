import SingleProduct from './SingleProduct';

const FlowerAbout = ({ about_page }) => {
	let data
	return (<>
		<div className="about-section">
			<h1>About Us Page</h1>
			<p>Some text about who we are and what we do.</p>
			<p>Resize the browser window to see that this page is responsive by the way.</p>
		</div>
		<h2 styles="text-align:center">Our Team</h2>
		<div className="row">
			{
				about_page.map((about) => {
					return (
						<div className="column">
							<div className="card">
								<div className="container">
									<h1>{about.ab_name}</h1>
									<h3>{about.ab_post}</h3>
									{about.ab_image}
									<p><button className="button" onClick="">Contact</button></p>
								</div>
							</div>
						</div>
					)
				})
			}

		</div>
	</>);
}

export default FlowerAbout;