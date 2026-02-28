let stringstr = 'apple cannot be eat without knife apple is apple and orange is orange'

let words = stringstr.split('')

let countword = {}

words.forEach(word => {
    countword[word] = (countword[word] || 0) + 1
    console.log(countword)
});