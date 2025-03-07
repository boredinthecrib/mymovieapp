import { useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
	const userName = localStorage.getItem("username") || "";
	const [searchQuery, setSearchQuery] = useState("");
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [trendingMovies, setTrendingMvoies] = useState([]);
	const navigate = useNavigate();

	// Add debounce to prevent too many API calls
	const debounce = (func, delay) => {
		let timer;
		return (...args) => {
			clearTimeout(timer);
			timer = setTimeout(() => func(...args), delay);
		};
	};

	useEffect(() => {
		const getTrendingMovies = async () => {
			const url =
				"https://api.themoviedb.org/3/trending/all/day?language=en-US";
			const options = {
				method: "GET",
				headers: {
					accept: "application/json",
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODZjZjFmYzY2MzhlZTJkZTI5NzRiOTYzYmYyNWQ1NSIsIm5iZiI6MTU5OTk2MDAxOC4zMTksInN1YiI6IjVmNWQ3M2QyNjg4Y2QwMDAzN2Y0Mjg1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ISZ2ilR5EF7x-TtuhYHXvppCrFRlQzaiN1P7kEWy4YI"
				}
			};

			fetch(url, options)
				.then((res) => res.json())
				.then((json) => {
					console.log(json);
					setTrendingMvoies(json.results);
				})
				.catch((err) => console.error(err));
		};
		getTrendingMovies();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			setError(null);

			try {
				const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
					searchQuery
				)}&include_adult=false&language=en-US&page=1`;

				const options = {
					method: "GET",
					headers: {
						accept: "application/json",
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODZjZjFmYzY2MzhlZTJkZTI5NzRiOTYzYmYyNWQ1NSIsIm5iZiI6MTU5OTk2MDAxOC4zMTksInN1YiI6IjVmNWQ3M2QyNjg4Y2QwMDAzN2Y0Mjg1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ISZ2ilR5EF7x-TtuhYHXvppCrFRlQzaiN1P7kEWy4YI"
					}
				};

				const response = await fetch(url, options);
				if (!response.ok) throw new Error("Network response was not ok");

				const json = await response.json();
				setMovies(json.results || []);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		// Add debounced search with 500ms delay
		const debouncedFetch = debounce(fetchData, 500);

		if (searchQuery.length > 0) {
			debouncedFetch();
		} else {
			setMovies([]);
			setLoading(false);
		}

		// Cleanup function
		return () => clearTimeout(debouncedFetch);
	}, [searchQuery]);

	const routeToProfile = (e) => {
		navigate("/profile");
	};
	return (
		<div className="container">
			<div className="welcomeHeader">
				<div>
					<h3>{userName ? `Welcome, ${userName}!` : "Welcome, Guest!"}</h3>
				</div>
				<div>
					<button onClick={routeToProfile}> Profile Page</button>
				</div>
			</div>

			{/* Add search form */}
			<div className="search-container">
				<input
					type="text"
					placeholder="Search movies..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					className="search-input"
				/>
			</div>

			{loading && <div className="loading">Loading...</div>}
			{error && <div className="error">Error: {error}</div>}

			<div className="mainPage">
				<div className="movies-grid">
					{movies.map((movie) => (
						<MovieCard
							key={movie.id}
							movieId={movie.id}
							title={movie.title}
							rating={Math.floor(parseFloat(movie.vote_average))}
							posterUrl={movie.poster_path}
							overview={movie.overview}
							year={movie.release_date}
						/>
					))}
				</div>

				<div className="trending-movies">
					<h3>Trending Movies to watch out for:</h3>
					<div className="trending-movie-grid">
						{trendingMovies.map((movie) => (
							<MovieCard
								key={movie.id}
								year={movie.release_date}
								movieId={movie.id}
								rating={Math.floor(parseFloat(movie.vote_average))}
								title={movie.title}
								posterUrl={movie.poster_path}
								overview={movie.overview}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
