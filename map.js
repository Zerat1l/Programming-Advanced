//Map do not modify ORIGINAL ARRAY and returns new array with the same length as the original

const practice = [25,26,27,28,29,30];
const sqr = practice.map((num) => {
    return Math.pow(num,2)
})

// console.log(sqr);
// console.log(practice);

//---------------------------------------------------

const bools = [true, true, false,true, false, false];
const randomBools = bools.map((el,index,arr) => {
    if(el) {
        return Math.floor(Math.random() * 10)
    } else {
        return 0
    }
})

// console.log(randomBools);

//----------------------------------------------------

const prices = [1.23, 19.99, 23.20, 8, 44.20];
const tax = prices.map((price) => {
    if(price > 10) {
        return (price * 1.20).toFixed(2);
    } else {
        return price;
    }
})

// console.log(prices);
// console.log(tax);

// ----------------------------------------------------

const items = ['light', 'banana', 'phone', 'book', 'mouse'];
const plurals = items.map((item) => {
    if(item === 'mouse') {
       return item = 'mice'
    }
    return item + 's';
})

// console.log(plurals);

//------------------------------------------------------

const row = [10,20,30,40,50]
const matrix = row.map((number) => {
   
    return  [number]
})
// console.log(row);
// console.log(matrix);