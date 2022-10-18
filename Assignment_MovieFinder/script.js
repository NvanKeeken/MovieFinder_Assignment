// Variables
const ulMovies = document.getElementById("movie_list");
const theMovies = movies;
const searchBar = document.getElementById("search");

// Functions
const addMoviesToDom = function (movies) {
  console.log(movies);
  const arrayMovieItems = movies.map(function (movie) {
    const listItem = document.createElement("li");
    const poster = document.createElement("img");
    const link = document.createElement("a");
    listItem.appendChild(poster);
    poster.src = movie.poster;
    listItem.replaceChild(link, poster);
    link.appendChild(poster);
    link.href = addUrlToMovie(movie.imdbID);
    return listItem;
  });
  arrayMovieItems.forEach(function (movie) {
    console.log(movie);
    ulMovies.appendChild(movie);
    return movie;
  });
};

// call addMoviesToDom after document has been loaded
document.addEventListener("DOMContentLoaded", function () {
  addMoviesToDom(theMovies);
});

// Events
const addEventListeners = function () {
  const radiobtns = document.getElementsByName("film-filter");

  radiobtns.forEach(function (button) {
    button.addEventListener("change", function (e) {
      console.log(e);
      handleOnChangeEvent(e);
    });
  });
};

const handleOnChangeEvent = function (event) {
  console.log(event.target);
  switch (event.target.value) {
    case "recent-movies":
      filterLatestMovies();
      break;
    case "avenger-movies":
      filterMovies("Avenger");
      break;
    case "x-men-movies":
      filterMovies("X-Men");
      break;
    case "princess-movies":
      filterMovies("Princess");
      break;
    case "batman-movies":
      filterMovies("Batman");
      break;
  }
};

// Filters
const filterMovies = function (wordInMovies) {
  const filteredArrayList = theMovies.filter(function (movie) {
    return movie.title.includes(wordInMovies) === true;
  });
  ulMovies.innerHTML = "";
  addMoviesToDom(filteredArrayList);
};

const filterLatestMovies = function () {
  const latestArrayList = theMovies.filter(function (movie) {
    return movie.year >= 2014;
  });
  ulMovies.innerHTML = "";
  addMoviesToDom(latestArrayList);
};

// setting href of <a> tag
const addUrlToMovie = function (imdbID) {
  const url = "https://www.imdb.com/title/" + imdbID;
  return url;
};

// Bonus Search-Bar
searchBar.addEventListener("input", function (e) {
  const value = e.target.value;
  const searchedMovies = theMovies.filter(function (movie) {
    return movie.title.includes(value) === true;
  });
  ulMovies.innerHTML = "";
  addMoviesToDom(searchedMovies);
});

addEventListeners();
