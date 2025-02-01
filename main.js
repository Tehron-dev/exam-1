// Bu script fileda moviesni JS codelari yoziladi 
function formatReleaseDate(timestamp) {
    var date = new Date(timestamp * 1000);
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var year = date.getFullYear();
    return month + '/' + day + '/' + year;
}
function renderFilms(films) {
    var filmList = document.getElementById('film-list');
    filmList.innerHTML = ''; 
    var fragment = document.createDocumentFragment();

    films.forEach(function(film) {
        var filmCard = document.createElement('div');
        filmCard.classList.add('film-card');

        var filmImg = document.createElement('img');
        filmImg.src = film.poster;
        filmImg.alt = film.title;
        filmImg.classList.add('film-img');

        var filmInfo = document.createElement('div');
        filmInfo.classList.add('film-info');

        var filmTitle = document.createElement('h3');
        filmTitle.textContent = film.title;

        var filmReleaseDate = document.createElement('p');
        filmReleaseDate.innerHTML = '<strong>Release Date:</strong> ' + formatReleaseDate(film.release_date);

        var filmOverview = document.createElement('p');
        filmOverview.textContent = film.overview;

        var filmGenres = document.createElement('p');
        filmGenres.classList.add('genres');
        filmGenres.innerHTML = '<strong>Genres:</strong> ' + film.genres.join(', ');
        filmInfo.appendChild(filmTitle);
        filmInfo.appendChild(filmReleaseDate);
        filmInfo.appendChild(filmOverview);
        filmInfo.appendChild(filmGenres);
        filmCard.appendChild(filmImg);
        filmCard.appendChild(filmInfo);
        fragment.appendChild(filmCard);
    });
    filmList.appendChild(fragment);
}
function filterFilms(searchTerm) {
    var filteredFilms = films.filter(function(film) {
        return film.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    renderFilms(filteredFilms);
}
var searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', function() {
    var searchTerm = document.getElementById('search-input').value;
    filterFilms(searchTerm);
});
var searchInput = document.getElementById('search-input');
searchInput.addEventListener('keyup', function(event) {
    if (event.key == 'Enter') {
        var searchTerm = searchInput.value;
        filterFilms(searchTerm);
    }
});
renderFilms(films);

