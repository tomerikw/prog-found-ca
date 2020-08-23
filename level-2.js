//Level 2

//question 1
for (var count = 15; count <= 25; count++)
  if (count % 2 === 0) {
    console.log(count);
  }

//question 2
function thisFunction(myFunction) {
  console.log(myFunction);
}
thisFunction("I am a function");

var innerFunction = thisFunction();

function outerFunction(innerFunction) {
  console.log(innerFunction);
}
outerFunction(innerFunction);

//Could not figur out the question 2. Would like the answer with comment on how to think correctly. Did not manage to call the first function in the second one.
