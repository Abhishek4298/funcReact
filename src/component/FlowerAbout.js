import SingleProduct from './SingleProduct';
import React, { useState, Suspense } from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const FlowerAbout = ({ about_page }) => {
	const { t } = useTranslation();

	function handleClick(lang) {
		i18next.changeLanguage(lang)
	}

	const [contact, setContact] = useState({});
	return (<>
		<nav style={{ width: '100%', padding: '2rem 0', backgroundColor: 'gray' }}>
			<button onClick={() => handleClick('en')} >
				English
			</button>
			<button onClick={() => handleClick('chi')} >
				Chinese
			</button>
			<button onClick={() => handleClick('hin')} >
				Hindi
			</button>
			<button onClick={() => handleClick('spa')} >
				Spanish
			</button>
			<button onClick={() => handleClick('guj')} >
				Gujrati
			</button>
		</nav>
		<div className="about-section">
			<h1>{t('Title.1')}</h1>
			<p>{t('Description1.1')}</p>
			<p>{t('Description1.2')}</p>
			{/* <h1>About Us Page</h1>
			<p>We are 3 team members.</p>
			<p>We are providing full stack developement services in javascript.</p> */}
		</div>

		<h2 styles="text-align:center">GFC Team</h2>
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
									{about.ab_no === contact.ab_no && (<span className="color-contact"><PhoneIcon />{contact.ab_contact}</span>)}
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