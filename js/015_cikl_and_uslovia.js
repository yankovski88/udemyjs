"use strict";
let numberOfFilms = +prompt("How many did you watch film?", "");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {
    },
    actors: {},
    genres: [],
    privat: false
};
for(let i=0; i < 2; i++){

    let a = prompt("What did you watch last film?", "");
    let b = prompt("What will you give ball?", "");

    if(a != null && b != null && a.length < 50 && b.length < 50 && a != "" && b != ""){
        personalMovieDB.movies.a = b;
        console.log("verno");
    } else {
        console.log("error");
        i--;
    }
}

if(personalMovieDB.count < 10){
    console.log("просмотренно добавленно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30){
    console.log("вы киноман");
} else {
    console.log("error");
}

console.log(personalMovieDB);
// console.log(personalMovieDB.count);
