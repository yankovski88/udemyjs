"use strict"
// callback это фунция которая должна быть выполнена только после того как выполнится другая
function first() {
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second(){
    console.log(2);
}

// first();
// second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log("Я прошел этот урок");
}
// learnJS("js", function () {
//    console.log("I do lessons");
// });

learnJS("python", done)