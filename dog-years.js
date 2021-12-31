//Human years stored in a variable.
let myAge = 28;

//First two years of a dog's life.
let earlyYears = 2;

earlyYears *= 10.5;

//After first two years of a dog's life.
let laterYears = myAge - 2;

//Each year multiplied 4 times and reassigned.
laterYears *= 4;

//Calculate human age to dog age.
let myAgeInDogYears = earlyYears + laterYears;

//Convert name to lower case strings.
let myName = 'Prince Asamoah'.toLowerCase();

//Print your name, age in human and dog years.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
