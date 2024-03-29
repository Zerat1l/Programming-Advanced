const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
let names = characters.map(char => char.name);
console.log(names);
//2. Get array of all heights
let heights = characters.map(char => char.height);
console.log(heights);
//3. Get array of objects with just name and height properties
let nameAndHeight = characters.map(char => ({name: char.name, height: char.height}));
console.log(nameAndHeight);
//4. Get array of all first names
letfirstNames = characters.map(char => char.name.split(' ')[0])
console.log(letfirstNames);

//***REDUCE***
//1. Get total mass of all characters
let totalMass = characters.reduce((a,b) => ({mass: a.mass + b.mass}));
console.log(totalMass);
//2. Get total height of all characters
let totalHeight = characters.reduce((a,b) => ({height: a.height + b.height}))
console.log(totalHeight);
//3. Get total number of characters by eye color
let numByColor = characters.reduce((blue,brown,yellow) => ({eye_color: blue.eye_color === blue}))
console.log(numByColor);
//4. Get total number of characters in all the character names

//***FILTER***
//1. Get characters with mass greater than 100
//2. Get characters with height less than 200
//3. Get all male characters
//4. Get all female characters

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
