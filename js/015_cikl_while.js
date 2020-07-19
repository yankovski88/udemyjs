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
let flag = 0;

while(flag < 2){
    let a = prompt("What did you watch last film?", "");
    let b = prompt("What will you give ball?", "");
    if(a != null && b != null && a.length < 50 && b.length < 50 && a != "" && b != ""){
        personalMovieDB.movies.a = b;
        flag++;
        console.log("true while");

    } else {
        console.log("do not true");
        flag--;}
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
