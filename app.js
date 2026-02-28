let stringstr = 'apple cannot be eat without knife apple is apple and orange is orange'

let words = stringstr.split('')

let countword = {}

words.forEach(word => {
    countword[word] = (countword[word] || 0) + 1
    console.log(countword)
});


let arr = [1,[2,3],[4,[5,6]]]

function flateArray() {
    return arr.flat(Infinity)
}

console.log(flateArray())