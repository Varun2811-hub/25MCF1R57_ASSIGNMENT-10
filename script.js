const movieInput = document.getElementById('movieInput');
const addMovieBtn = document.getElementById('addMovieBtn');
const clearListBtn = document.getElementById('clearListBtn');
const movieListEl = document.getElementById('movieList');
const movieCountEl = document.getElementById('movieCount');

let movies = [];

// function to render the list and count
function renderMovies() {
  // clear existing list
  movieListEl.innerHTML = '';

  // populate the list items
  movies.forEach((movie, index) => {
    const li = document.createElement('li');
    li.textContent = movie;
    
    // when clicked, remove this movie
    li.addEventListener('click', () => {
      movies.splice(index, 1);
      renderMovies();
    });
    
    movieListEl.appendChild(li);
  });

  // update count
  movieCountEl.textContent = `Total movies: ${movies.length}`;
}

// event listener for add button
addMovieBtn.addEventListener('click', () => {
  const movieName = movieInput.value.trim();
  if (movieName === '') {
    alert('Please enter a movie name.');
    return;
  }

  movies.push(movieName);
  movieInput.value = ''; // clear input
  renderMovies();
});

// event listener for clear list button
clearListBtn.addEventListener('click', () => {
  movies = [];
  renderMovies();
});

// initial render
renderMovies();
