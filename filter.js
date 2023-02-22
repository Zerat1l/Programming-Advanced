//filter keeps the value only if condition returns true if its false it discard it
//do not modifay ORIGINAL ARRAY creates a new array
//works only on arrays 

const practice = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const even = practice.filter((number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
});

// console.log(practice);
// console.log(even);

//----------------------------------------------

const countries = [
  "France",
  "South Africa",
  "Brazil",
  "United States",
  "Sweeden",
];

const haveSpace = countries.filter((word) => {
  if (word.includes(" ")) {
    return true;
  }
  return false;
});

// console.log(haveSpace);

//-----------------------------------------------------

const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];
const lowPrices = prices.filter((price) => {
    if(price * 1.15 < 10.00) {
        return true;
    }
    return false;
})

// console.log(prices);
// console.log(lowPrices);

//--------------------------------------------------

const values = [[1,2,3],[0,0,1],[3,6,9],[0,1,2]];

const hasTwo = values.filter((value) => {
    if(value.includes(2)) {
        return true;
    }
    return false;
})

// console.log(hasTwo);


//-----------------------------------------------

const nums = [10, 20, 30, 40, 50];

// const timesTwo = nums.map((number) => {
//     return number * 2;
// })

// const over50 = timesTwo.filter((number) => {
//     if(number > 50) {
//         return true;
//     }
//     return false;
// })

// console.log(nums);
// console.log(timesTwo);
// console.log(over50);

const result = nums
.map((num) => {return num * 2})
.filter((num) => {
    if(num > 50) {
        return true;
    }
    return false;
})

// console.log(result);