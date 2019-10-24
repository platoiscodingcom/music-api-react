import React from 'react';

const Pagination = () => {
	return (
		<div className="container-pagination animated fadeIn delay-1s">
			<div className="pagination">
				<ul>
					<li>
						<i className="fas fa-arrow-left" />
					</li>
					<li>
						<div className="page">1</div>
					</li>
					<li>
						<div className="page">2</div>
					</li>
					<li>
						<div className="page">3</div>
					</li>
					<li>
						<i className="fas fa-arrow-right" />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Pagination;
