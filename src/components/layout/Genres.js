import React from 'react';

const Genres = () => {
	return (
		<section className="section-a section-gray">
			<div className="container container-icons animated fadeIn delay-1s">
				<div className="genre-icon">
					<i className="fas fa-th" />
					<span className="genre-title">Top 10</span>
				</div>
				<div className="genre-icon">
					<i className="fas fa-headphones-alt" />
					<span className="genre-title">Metal</span>
				</div>
				<div className="genre-icon">
					<i className="fas fa-guitar" />
					<span className="genre-title">Rock</span>
				</div>
				<div className="genre-icon">
					<i className="fas fa-compact-disc" />
					<span className="genre-title">classic</span>
				</div>
				<div className="genre-icon">
					<i className="fas fa-drum" />
					<span className="genre-title">Jazz</span>
				</div>
				<div className="genre-icon">
					<i className="fas fa-music" />
					<span className="genre-title">Pop</span>
				</div>
			</div>
		</section>
	);
};

export default Genres;
