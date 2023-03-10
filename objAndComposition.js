function caloriObj(arr) {
  let stock = {};
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) stock[arr[i]] = Number(arr[i + 1]);
  }
  return stock;
}

// console.log(caloriObj(['Yoghurt', '48', 'Rise', '138','Apple', '52']))

function constructionCrew(obj) {
  let amount = 0;

  for (const key in obj) {
    if (obj.dizziness) {
      amount = obj.weight * 0.1 * obj.experience;
      obj.levelOfHydrated += amount;
      obj.dizziness = false;
    }
  }
  return obj;
}

// constructionCrew({
//     weight: 80,
//     experience: 1,
//     levelOfHydrated: 0,
//     dizziness: true
// })

function carFactory({ model, power, color, carriage, wheelsize }) {
  const engines = {
    small: { power: 90, volume: 1800 },
    normal: { power: 120, volume: 2400 },
    monster: { power: 200, volume: 3500 },
  };

  let engine = {};

  if (power <= 90) {
    engine = engines.small;
  } else if (power <= 120) {
    engine = engines.normal;
  } else {
    engine = engines.monster;
  }

  if (wheelsize % 2 === 0) {
    wheelsize--;
  }

  const car = {
    model,
    engine,
    carriage: {
      type: carriage,
      color,
    },
    wheels: Array(4).fill(wheelsize),
  };
  console.log(car);
  return car;
}

// carFactory({
// model: 'VW Golf II',
// power: 90,
// color: 'blue',
// carriage: 'hatchback',
// wheelsize: 14
// })
// carFactory({ model: 'Opel Vectra',
// power: 110,
// color: 'grey',
// carriage: 'coupe',
// wheelsize: 17 })

function heroInventory(data) {
  let result = [];
  for (const line of data) {
    let [name, level, items] = line.split(" / ");
    level = Number(level);
    if (items === undefined) {
      items = [];
    } else {
      items = items.split(", ");
    }

    result.push({ name, level, items });
  }
  console.log(JSON.stringify(result));
}

// heroInventory(['Isacc / 25',
// 'Derek / 12 / BarrelVest, DestructionSword',
// 'Hes / 1 / Desolator, Sentinel, Antara'])

function lowestPrice(input) {
  let result = {};

  for (let i = 0; i < input.length; i++) {
    let [town, product, price] = input[i].split(" | ");
    price = Number(price);

    if (!result[product]) {
      result[product] = {price, town };
    } 
    else if (result[product].price > price) {
      result[product] = {price, town};
    }  
  }
  console.log(result);
  
  for (const key in result) {
    console.log(`${key} -> ${result[key].price} (${result[key].town})`);
  }
}

lowestPrice([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);


