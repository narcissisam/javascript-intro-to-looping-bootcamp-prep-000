function forLoop(array) {
  for (let i = 0; i < 25; i++) {
  if (i === 1) { array.unshift("I am 1 strange loop.");
  } else { array.unshift("I am ${i} strange loops.");
  }
}
}
function whileLoop(n) {
  while (n > 0) {
    console.log(n)
    n--;
  }
  return ('done');
}
function incrementVariable() {
  i = i + 1;
}
function doWhileLoop(array){
  do {
  array.shift(i);
} while (array.length > 0 && incrementVariable())
return array;
}

