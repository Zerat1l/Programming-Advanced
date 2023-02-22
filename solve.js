function delimiter(arr, deli) {
  console.log(arr.join(deli));
}

// delimiter(
//   ["One", "Two", "Three", "Four", "Five"],

//   "-"
// );

function nthEl(arr, count) {
  let result = [];

  for (let i = 0; i < arr.length; i += count) {
    result.push(arr[i]);
  }
  return result;
}

// nthEl(
//   ["5", "20", "31", "4", "20"],

//   2
// );

// addRemoveEl(["add", "add", "add", "add"]);
// addRemoveEl(['add', 'add', 'remove', 'add', 'add'])
// addRemoveEl(['remove', 'remove', 'remove'])

function rotateArr(arr, rotations) {
  for (let index = rotations; index > 0; index--) {
    arr.unshift(arr.pop());
  }

  console.log(arr.join(" "));
}

// rotateArr(["1", "2", "3", "4"],2);
// rotateArr(['Banana', 'Orange', 'Coconut', 'Apple'], 15)

function increasingSubset(arr) {
  let result = [];
  let biggest = arr[0];

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] >= biggest) {
      result.push(arr[index]);
      biggest = arr[index];
    }
  }
  return result;
}

// increasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// increasingSubset([1, 2, 3, 4])
// increasingSubset([20, 3, 2, 15,6, 1])

function listOfNames(arr) {
  let count = 1;
  let sorted = arr.sort((a, b) => a.localeCompare(b));

  sorted.forEach((el) => {
    console.log(count + "." + el);
    count++;
  });
}

// listOfNames(["John", "Bob", "Christina", "Ema"]);

function sortNumbers(arr) {
  arr.sort((a, b) => a - b);

  let result = [];

  while (arr.length !== 0) {
    result.push(arr.shift());
    result.push(arr.pop());
  }

  return result;
}

// sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])

function sortByTwoCriteria(arr) {
  const twoCriteriaSort = (cur, next) =>
    cur.length - next.length || cur.localeCompare(next);
  arr.sort(twoCriteriaSort);
  console.log(arr.join("\n"));
}

// sortByTwoCriteria(["alpha", "beta", "gamma"]);
// sortByTwoCriteria(['Isacc', 'Theodor','Jack', 'Harrison', 'George'])

function magicMatrices(arr) {
  let sumRows = 0;
  let sumCols = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentArr = arr[i].join("");
    for (let j = 0; j < currentArr.length; j++) {
      sumRows += Number(currentArr[j]);
      sumCols += Number(currentArr[0]);
    }
  }
  if (sumCols === sumRows) {
    console.log("true");
  } else {
    console.log("false");
  }
}

// magicMatrices([
//   [4, 5, 6],

//   [6, 5, 4],

//   [5, 5, 5],
// ]);

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < arr.length; i += 3) {
  let temp = [];
  for (let y = 0; y < 3; y++) {
    if (arr[i + y]) {
      temp.push(arr[i + y]);
    }
  }
  // console.log(temp);
}

let person = {
  name: "Georgi",
  age: 33,
  seyHi: function () {
    console.log(`${this.name} says Hello`);
  },
  hobbies: ["Footbal", "Fishing", "Driving"],
  friend: {
    name: "Emo",
    seyHelo: function () {
      console.log(`${this.name} says HELLO`);
    },
  },
};

// person.friend.seyHelo()
// person.seyHi()

// const arr1 = ['Outer','Outer','Outer'];
// const arr2 = ['Inner','Inner','Inner'];

// arr1.forEach(el => {
//   console.log(el);
//   arr2.forEach(el => {
//     console.log(el);
//   })
// })

let array = [
  "Orange 5",
  "Orange 10",
  "Orange 35",
  "Apple 10",
  "Apple 3",
  "Salt 40",
  "Apple 15",
  "Salt 32",
];

function test(input) {
  const biggerPrice = {};
  input.forEach((el) => {
    let [product, price] = el.split(" ");
    price = Number(price);
    if (!biggerPrice.hasOwnProperty(product)) {
      biggerPrice[product] = price;
    } else if (biggerPrice[product] < price) {
      biggerPrice[product] = price;
    }
  });
  console.log(biggerPrice);
}

// test(array);

function stroreCatalogue(arr) {

  const sorted = arr.sort();
  const result = [];
  sorted.forEach(el => {
    const [product, price] = el.split(' : ');
    result.push(product + ': ' + price)
  })
  
  let initial = '';

  result.map(el => {
    if(initial !== el[0]) {
      initial = el[0];
      console.log(initial);
      console.log('  ' + el);
    } else {
      console.log('  ' + el);
    }
  })
}

// stroreCatalogue([
//   "Appricot : 20.4",
//   "Fridge : 1500",
//   "TV : 1499",
//   "Deodorant : 10",
//   "Boiler : 300",
//   "Apple : 1.25",
//   "Anti-Bug Spray : 15",
//   "T-Shirt : 10",
// ]);


function townsToJSON(arr) {

class Town {
  constructor(name, latitude, longitude) {
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
const result = [];

for(let i = 1; i < arr.length; i++) {
  let splited = arr[i].split('|');
  let name = splited[1].trim();
  let latitude = Number(splited[2].trim()).toFixed(2);
  let longitude = Number(splited[3].trim()).toFixed(2);

  let newTown = new Town(name, latitude, longitude);

  let toJSON = {}

  toJSON['Town'] = newTown.name;
  toJSON['Latitude'] = Number(newTown.latitude);
  toJSON['Longitude'] = Number(newTown.longitude);

  let objectToJSON = JSON.stringify(toJSON)
  console.log(objectToJSON);
}

}

townsToJSON(['| Town | Latitude | Longitude |',

'| Sofia | 42.696552 | 23.32601 |',

'| Beijing | 39.913818 | 116.363625 |'])
