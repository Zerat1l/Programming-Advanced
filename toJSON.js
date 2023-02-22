function townsToJSON(arr) {
  class Town {
    constructor(name, latitude, longitude) {
      this.name = name;
      this.latitude = latitude;
      this.longitude = longitude;
    }
  }
  let result = [];

  for (let i = 1; i < arr.length; i++) {
    let splited = arr[i].split("|");
    let name = splited[1].trim();
    let latitude = Number(splited[2].trim()).toFixed(2);
    let longitude = Number(splited[3].trim()).toFixed(2);

    let newTown = new Town(name, latitude, longitude);

    let toJSON = {};

    toJSON["Town"] = newTown.name;
    toJSON["Latitude"] = Number(newTown.latitude);
    toJSON["Longitude"] = Number(newTown.longitude);

    let objectToJSON = JSON.stringify(toJSON);
    result.push(objectToJSON);
  }
  
  console.log("[" + result.join(",") + "]");
}

// townsToJSON([
//   "| Town | Latitude | Longitude |",

//   "| Sofia | 42.696552 | 23.32601 |",

//   "| Beijing | 39.913818 | 116.363625 |",
// ]);


function rectangle(width, height, color) {
    let colorToUpper = color[0].toUpperCase() + color.slice(1);
    
    let rect = {
        width: Number(width),
        height:  Number(height),
        color: colorToUpper,
        calcArea: function() {
            let result = Number(this.width * this.height);
            return result;
        }
    }
    return rect
}
let rect = rectangle(4, 5, 'red')
console.log(rect);