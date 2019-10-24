import React from 'react';

const Footer = () => {
	return (
		<footer id="footer" className="section-footer py-4 bg-primary">
			<div className="container">
				<div>
					<h2 className="text-2 mb-1">Lorem ipsum dolor sit.</h2>
					<a href="http://twitter.com">
						<i className="fab fa-twitter fa-2x" />
					</a>
					<a href="http://facebook.com">
						<i className="fab fa-facebook fa-2x" />
					</a>
					<a href="http://youtube.com">
						<i className="fab fa-youtube fa-2x" />
					</a>
				</div>
				<div>
					<h3>Company Info</h3>
					<ul>
						<li>
							<a href="/">All Products</a>
						</li>
						<li>
							<a href="/">About Us</a>
						</li>
						<li>
							<a href="/">Privacy Policy</a>
						</li>
						<li>
							<a href="/">Terms of Service</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
