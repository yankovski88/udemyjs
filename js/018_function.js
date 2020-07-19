"use strict";
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many did you watch film?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many did you watch film?", "");
    }
}

start();


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {

        let a = prompt("What did you watch last film?", "");
        let b = prompt("What will you give ball?", "");

        if (a != null && b != null && a.length < 50 && b.length < 50 && a != "" && b != "") {
            personalMovieDB.movies.a = b;
            console.log("verno");
        } else {
            console.log("error");
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("просмотренно добавленно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("вы киноман");
    } else {
        console.log("error");
    }
}

detectPersonalLevel();

// function showMyDB() {
//     if (personalMovieDB.privat === false) {
//         console.log(personalMovieDB);
//     }
// }
function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

// function writeYouGenres() {
//     let genres = [];
//     let number = 0;
//     for (let i = 0; i <= 2; i++) {
//         number++;
//         let getLikeJanr = prompt("Ваш любимый жанр под номером " + number);
//         genres.push(getLikeJanr);
//     }
//     console.log(genres);
// }

function writeYouGenres() {
    for (let i = 1; i <= 3; i++) {
        // const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        // personalMovieDB.genres[i-1] = genre;
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
    console.log(genres);
}
writeYouGenres();

// console.log(personalMovieDB.count);
