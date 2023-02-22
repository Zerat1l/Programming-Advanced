//Reduce do not modify ORIGINAL ARRAY 
//Reduce the array to a single value

const points = [55,56,57,58,59,60]
const sum = points.reduce((result, number) => {
    return result + number;
},0)

// console.log(points);
// console.log(sum);

//-----------------------------------------------

const companies = ['apple', 'tesla', 'spacex', 'amazon', 'meta', 'google',];
const modded = companies.reduce((result, company, i) => {
    if(company.startsWith('a')) {
         return result
    }
    if(i === companies.length -1) {
       return result + company;
    }
    
    return result + company + '-';
},'')

// console.log(modded);

//----------------------------------------------

const prices = [1.23, 19.99,85.2, 32.87, 8, 5.2];
const afterTax = prices.reduce((result, price) => {
    if(price > 6) {
        return result + price;
    }
    return result + price * 1.2;
},0)

// console.log(afterTax);

//------------------------------------------------

const items = ['light', 'banana','phone','book','mouse']
const caps = items.map((element) => element.toLocaleUpperCase());
const concat = caps.reduce((result, element) => {
    return result + element + ' ';
},'')

// console.log(concat);

//--------------------------------------------------

const nums = [10,30,50,70,90];

const squares = nums.map((number) => {
    return number * number;
})
const over1000 = squares.filter((num) => {
    if(num > 1000) {
        return true
    }
    return false
})
const finale = over1000.reduce((result, num) => {
    return result + num;
}, 0)
// console.log(squares);
// console.log(over1000);
// console.log(finale);

let asd = [123,12,5555,1000]

let max = asd.reduce((result, number) => {
    if(result < number) {
        result = number;
    }
    return result;
},0)

