import React from "react";
import "./MovieCard.css"; // Create this CSS file

const MovieCard = ({ title, year, genre, rating, posterUrl, overview }) => {
	return (
		<div className="movie-card">
			<div className="movie-card__inner">
				<div className="movie-card__front">
					<img
						src={`https://image.tmdb.org/t/p/original/${posterUrl}`}
						alt={title}
						className="movie-card__poster"
					/>
					<div className="movie-card__rating">{rating}</div>
				</div>

				<div className="movie-card__back">
					<div className="movie-card__content">
						<h3 className="movie-card__title">{title}</h3>
						<div className="movie-card__meta">
							<span className="movie-card__year">{year}</span>
							<span className="movie-card__genre">{genre}</span>
						</div>
						<p className="movie-card-overview">{overview}</p>
						<button className="movie-card__button">View Details</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
