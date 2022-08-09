//1
const movieNames = ["Interstellar", "Catch me if you can", "The shawshank redemption"]
movieNames.forEach(item => { console.log(item) });
//2
const carManufacturers = ["Ferari", "Porsche", "Ford", "Renault"]
const manufacturers_string = carManufacturers.join(', ')
console.log(manufacturers_string)
const manufacturers_array = manufacturers_string.split(', ')
console.log(manufacturers_array)
//3
const friendNames = ["Alex", "Andrey", "Max"]
const helloFriends = friendNames.map(item => `Hello ${item}`)
console.log(helloFriends)
//4
const numbers = [1, 2, 3, 0]
const bools = numbers.map(item => Boolean(item))
console.log(bools)
//5
const arrayForSorting = [1, 6, 7, 8, 3, 4, 5, 6]
arrayForSorting.sort((a, b) => b - a)
console.log(arrayForSorting)
//6
const arrayToFilter = [1, 6, 7, 8, 3, 4, 5, 6]
const filtetedArray = arrayToFilter.filter(item => item > 3)
console.log(filtetedArray)
//7
function findNumberIndex(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == number) {
            return i
        }
    }
}
console.log(findNumberIndex(arrayToFilter, 7))
//8
console.log("a less than 10")
let a = 5
while(a<10){
    console.log(a)
    a++
}
//9
console.log("Prime numbers:")
let count = 0
const amoutOfprimes = 10 //change to increase amount of output numbers
let number = 1

while (count < amoutOfprimes) {
    let i = 2
    number++
    let flag = true
    while (i * i <= number) {
        if (number % i == 0) {
            flag = false
            break
        } else {
            i++
        }

    }
    if (flag) {
        console.log(number)
        count++
    }
}
//10
console.log("Odd numbers:")

count = 0
const amountOfodds = 15 //change to increase amount of output numbers
number = 1
while (count < amountOfodds) {
    if (number % 2 !== 0) {
        console.log(number)
        number++
        count++
    } else {
        number++
    }
}