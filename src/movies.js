// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const director = moviesArray.map(moviesArray => moviesArray.director);
    return director;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const filteresMovies = moviesArray.filter(moviesArray => moviesArray.director === 'Steven Spielberg' && moviesArray.genre.includes('Drama')
    );
    return filteresMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const totalScores = moviesArray.reduce((acc, moviesArray) => {if (typeof moviesArray.score !== 'number') {
    return acc;
    }
    return acc + moviesArray.score;
    }, 0);
      
    const averageScore = totalScores / moviesArray.length;
    const roundedAverageScore = Math.round(averageScore * 100) / 100;
    return roundedAverageScore;
    if (moviesArray === []) return 0;
    }
      

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(moviesArray => moviesArray.genre.includes('Drama'));
      
    if (dramaMovies.length === 0) return 0;
      
    const totalScores = dramaMovies.reduce((acc,moviesArray) => { if (typeof moviesArray.score !== 'number') return acc; return acc + moviesArray.score;
    }, 0);
      
    const averageScore = totalScores / dramaMovies.length;
    const roundedAverageScore = Math.round(averageScore * 100) / 100;
      
    return roundedAverageScore;
      }
      


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
