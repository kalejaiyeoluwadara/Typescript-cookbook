"use strict";
var id = "dara";
function add(a, b) {
    return a + b;
}
let things = [1, 'this', true];
let age = 'itle';
let user = {
    firstname: 'dara',
    age: 15
};
const arr = [10, 'hello', 'hi', 30];
let anth;
anth = [10, 20];
const Coords = () => {
    let long = 10;
    let lat = 30;
    return [long, lat];
};
const [x, y] = Coords();
const getRandomColor = () => {
    const r = Math.floor(Math.random() * 225);
    const g = Math.floor(Math.random() * 225);
    const b = Math.floor(Math.random() * 225);
    return [r, g, b];
};
const first = getRandomColor();
const sec = getRandomColor();
const FormatUser = (user) => {
    console.log("User name is", user.name);
};
// FormatUser({name:"dara",age:19});
let someId;
const Swap = (id) => {
    return null;
};
const addUser = (obj) => {
    return obj;
};
