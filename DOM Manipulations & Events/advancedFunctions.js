function sortArr(arr, arg) {
  return arg === "asc" ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
}

// sortArr([14, 7, 17, 6, 8], "asc");
// sortArr([14, 7, 17, 6, 8], "desc");

//------------------------------------------

function argInfo() {
  const arg = Array.from(arguments);
  const count = new Map();
  arg.forEach((el) => {
    const type = typeof el;
    console.log(`${type}: ${el}`);
    if (!count.has(type)) {
      count.set(type, 0);
    }
    count.set(type, count.get(type) + 1);
  });
  Array.from(count.entries())
    .sort((a, b) => a[1] - b[1])
    .forEach((el) => {
      console.log(`${el[0]}: ${el[1]}`);
    });
}

// argInfo('cat', 42, function () { console.log('Hello world!');})

//------------------------------------------------------

function getFibinator() {
  let num = 1;
  let previous = 0;

  function fib() {
    let fibNumber = num + previous;
    num = previous;
    previous = fibNumber;

    return fibNumber;
  }
  return fib;
}
// let fib = getFibinator();
// console.log(fib());
// console.log(fib());
// console.log(fib());
// console.log(fib());
// console.log(fib());

//--------------------------------------

function solution() {
  const library = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };

  const storedElements = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  function manager(str) {
    let [command, action, quantity] = str.split(" ");
    quantity = Number(quantity);

    if (command === "prepare") {
      let recipe = library[action];
      for (const el in recipe) {
        if (recipe[el] * quantity > storedElements[el]) {
          return `Error not enough ${el} in stock`;
        } 
      } 
      for (const el in recipe) {
        storedElements[el] -= recipe[el] * quantity;
      }
      return `Success`;

    } else if (command == "restock") {
      storedElements[action] += quantity;
      return `Success`;

    } else if (command == "report") {
      const result = [];

      for (const el in storedElements) {
        result.push(`${el}=${storedElements[el]}`);
      }
      return result.join(" ");
    }
  }

  return manager;
}

let manager = solution();
// console.log(manager("restock flavour 50"));
// console.log(manager("prepare lemonade 4"));
// console.log(manager('prepare turkey 1'))
// console.log(manager('restock protein 10'));
// console.log(manager('prepare turkey 1'))
// console.log(manager('restock carbohydrate 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock fat 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock flavour 50'))
// console.log(manager('restock flavour 50'))
// console.log(manager('prepare turkey 1'))
// console.log(manager('report'))
