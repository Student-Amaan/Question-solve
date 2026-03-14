let stringstr =
  "apple cannot be eat without knife apple is apple and orange is orange";

let words = stringstr.split("");

let countword = {};

words.forEach((word) => {
  countword[word] = (countword[word] || 0) + 1;
  console.log(countword);
});

let arr = [1, [2, 3], [4, [5, 6]]];

function flateArray() {
  return arr.flat(Infinity);
}

console.log(flateArray());

let duplicate = [
  { id: 1, name: "danish" },
  { id: 2, name: "aman" },
  { id: 1, name: "danish" },
  { id: 2, name: "aman" },
];

function removeDuble(ar) {
  const map = new Map();

  ar.forEach((obj) => {
    map.set(obj.id, obj);
  });

  return Array.from(map.values());
}

console.log(removeDuble(duplicate));

function debonce(fn, delay) {
  let timer;

  return function (...arg) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arg);
      console.log("function is debonce");
    }, delay);
  };
}

console.log(debonce());

function danishfn(name) {
  console.log("Aman danish", name);
}

const deboncefunction = debonce(danishfn, 2000);

deboncefunction("aman");
deboncefunction("danish");
deboncefunction("waxir");
deboncefunction("rahim");

// Closures

function outer() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter = outer();

counter();
counter();
counter();
counter();
counter();

function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

function search(query) {
  console.log("Searching for:", query);
}

const debounceSearch = debounce(search, 1000);

debounceSearch("h");
debounceSearch("he");
debounceSearch("hel");
debounceSearch("hell");
debounceSearch("hello");