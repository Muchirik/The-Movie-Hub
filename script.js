const APILINK =
	"https://api.themoviedb.org/3/movie/550?sort_by=popularity.desc&api_key=c1bffe2953e553759402b7e5d68c80be&page=1";
const search = document.getElementById("query");
// const apee =
// "https://api.themoviedb.org/3/search/movie?api_key=c1bffe2953e553759402b7e5d68c80be&language=en-US&page=1&include_adult=false";

const load = function (e) {
	e.preventDefault();
	console.log(search.value);

	const searchItem = search.value;

	const api2 = `
    https://api.themoviedb.org/3/search/movie?api_key=c1bffe2953e553759402b7e5d68c80be&language=en-US&query=${search.value}&page=1&include_adult=false`;

	const IMGPATH = "https://image.tmdb.org/t/p/w1280";
	const SEARCHAPI =
		"https://api.themoviedb.org/3/movie/550?&api_key=c1bffe2953e553759402b7e5d68c80be&query=";

	const main = document.getElementById("section");
	const form = document.getElementById("form");
	main.innerHTML = "";
	returnMovies(api2);
	function returnMovies(url) {
		fetch(url)
			.then((res) => res.json())
			.then(function (data) {
				console.log(data);
				data.results.forEach((element) => {
					const div_card = document.createElement("div");
					div_card.setAttribute("class", "card");

					const div_row = document.createElement("div");
					div_row.setAttribute("class", "row");

					const div_column = document.createElement("div");
					div_column.setAttribute("class", "column");

					const image = document.createElement("img");
					image.setAttribute("class", "thumbnail");
					image.setAttribute("id", "image");

					const title = document.createElement("h3");
					title.setAttribute("id", "title");

					const center = document.createElement("center");

					title.innerHTML = `${element.title}`;
					image.src = IMGPATH + element.poster_path;

					center.appendChild(image);
					div_card.appendChild(center);
					div_card.appendChild(title);
					div_column.appendChild(div_card);
					div_row.appendChild(div_column);

					main.appendChild(div_row);
				});
			});
	}

	if (searchItem) {
		returnMovies(SEARCHAPI + searchItem);
		search.value = "";
	}
};

form.addEventListener("submit", load);
