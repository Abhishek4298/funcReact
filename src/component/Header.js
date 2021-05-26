/* eslint-disable react/no-typos */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Header = ({ title, searchBar }) => {
	//replace "a" tag with Link and "href" tag with to 
	return (<>
		<nav className="navbar navbar-expand-lg navbar-light bg-light ">
			<Link className="navbar-brand" to="/">{title}</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/about">About</Link>
					</li>
					<li className="nav-item active">
						<Link className="nav-link" to="/shop">Shop <span className="sr-only">(current)</span></Link>
					</li>
					<li className="nav-item active">
						<Link className="nav-link" to="/clock">Clock <span className="sr-only">(current)</span></Link>
					</li>
				</ul>
				<ul className="navbar-nav mr-auto">
					<li className="headerIcon">
						<Link className="nav-link" to="/shop">	<ShoppingCartIcon /> <span className="sr-only">(current)</span></Link>
					</li>
					<li className="nav-link">
						<Link className="nav-link {padding-left: 80px;}" to="/shop">	<AccountCircleIcon /> <span className="sr-only">(current)</span></Link>
					</li>
				</ul>
				{searchBar ? <form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				</form> : ""}
			</div>
		</nav>
	</>);
}
export default Header;

Header.defaultProps = {
	title: "Your title here",
	searchBar: true
}

Header.propTypes = {
	title: PropTypes.string,
	searchBar: PropTypes.bool
}