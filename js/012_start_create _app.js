"use strict";

let numberOfFilms = +prompt("How many did you watch film?", "");
let question1 = prompt("What did you watch last film?", "");
let question2 = prompt("What will you give ball?", "");

let question3 = prompt("What did you watch last film?", "");
let question4 = prompt("What will you give ball?", "");
// let question1 = "son";
// let question2 = "7";
//
// let numberOfFilms = "blade"
let personalMovieDB = {
    count: numberOfFilms,
    movies: {
    },
    actors: {},
    genres: [],
    privat: false
};
personalMovieDB.movies[question1] = question2;
personalMovieDB.movies.question3 = question4; // через . плохо работает, если написать ответ где много пробелов и т.д.
console.log(personalMovieDB);
// console.log(personalMovieDB.count);
