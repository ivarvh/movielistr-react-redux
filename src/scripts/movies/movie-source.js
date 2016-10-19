const BASE_URL = 'http://localhost:8091/application/movies';
const JSON_HEADERS = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
};

class MovieSource {

	constructor() {
	}

	getMovies() {
		return fetch(BASE_URL);
	}

	createMovie(movie) {
		return fetch(BASE_URL,
			{
				method: 'POST',
				headers: JSON_HEADERS,
				body: JSON.stringify(movie)
			});
	}

	updateMovie(movie) {
		return fetch(BASE_URL + '/' + movie.id,
			{
				method: 'PUT',
				headers: JSON_HEADERS,
				body: JSON.stringify(movie)
			});
	}

	deleteMovie(id) {
		return fetch(BASE_URL + '/' + movie.id,
			{
				method: 'DELETE'
			});
	}

}

let movieSource = new MovieSource();

export default movieSource;