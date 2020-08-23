// Level 1
// question 1

var sneaker = "Nike";

// question 2

var person = {
  name: "Tom",
  age: 37,
};

//question 3

var outOfStock = true;
if (outOfStock === true) {
  console.log("Out of stock");
} else {
  console.log("In stock");
}

//question 4

var numbers = [2, 4, 6, 8, 10];
var numbersOfNumbers = numbers.length;
console.log(numbersOfNumbers);
for (var i = 0; i < numbersOfNumbers; i++) {
  console.log(numbers[i]);
}

//question 5
for (var count = 15; count <= 25; count++) {
  console.log(count);
}

//question 6
for (var count = 15; count <= 25; count++)
  if (count === 20) {
    console.log(count);
  }

//question 7
var house = [
  {
    color: "red",
    floors: 2,
    garage: true,
  },

  {
    color: "white",
    floors: 1,
    garage: true,
  },
];

for (var i = 0; i < house.length; i++) {
  console.log(house[i].floors);
  console.log(house[i].garage);
}

//question 8
function whatIDontLike(dontLike) {
  console.log("I don`t like " + dontLike);
}
whatIDontLike("racism");

//question 9
function ageDifference(wife, me) {
  var sum = wife - me;
  console.log(sum);
}

ageDifference(39, 36);

//question 10
var animal = [];
function myAnimal(newAnimal) {
  animal.push(newAnimal);
}
myAnimal("guineapig");

console.log(animal.length);
