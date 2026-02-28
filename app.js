let stringstr =
  "apple cannot be eat without knife apple is apple and orange is orange";

let words = stringstr.split("");

let countword = {};

words.forEach((word) => {
  countword[word] = (countword[word] || 0) + 1;
  console.log(countword)
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
