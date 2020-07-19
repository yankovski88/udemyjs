"use strict";

let a = 50;

if (a === 30){
    console.log("yes");
} else if(a > 100){
    console.log("a > 100");
} else {
    console.log("nothing");
};

(a === 50) ? console.log("true yes") : console.log("false no");

switch(a) {
    case 90:
        console.log("true 90");
        break;
    case 51:
        console.log("true 51");
        break;
    default:
        console.log("I nothing souch");
        break;
}