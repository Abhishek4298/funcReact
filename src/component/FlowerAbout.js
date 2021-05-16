import SingleProduct from './SingleProduct';
import React, { useState } from 'react';


const FlowerAbout = ({ about_page }) => {
	const [contact, setContact] = useState({});	
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
						<div className="column" key={about.ab_no}>
							<div className="card">
								<div className="container">
									<h1>{about.ab_name}</h1>
									<h3>{about.ab_post}</h3>
									{about.ab_image}
									<p><button className="button" onClick={() => setContact(about)}>Contact</button></p>
									{about.ab_no === contact.ab_no && (<span>{contact.ab_contact}</span>)}
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