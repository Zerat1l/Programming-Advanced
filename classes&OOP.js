class Animal {
    constructor(type, name) {
        this.name = name;
        this.type = type;
    }
    bau() {
        console.log(`${this.name} baff baff`);
    }
}

const dog = new Animal('Shpic', 'Charlie');
const parrot = new Animal('Ara', 'Kolio');

// console.log(dog);
// console.log(parrot);

// delete dog.name;
// console.log(dog);

//------------------------------------------------

class Student {
    constructor(name, major, grades) {
        this.name = name;
        this.major = major;
        this.grades = grades;
    }
    addGrade(grade) {
        this.grades.push(grade);
    }
    gpa() {
        let avg = this.grades.reduce((result, grade) => {
            return result + grade;
        },0)
        return (avg / this.grades.length).toFixed(2)
    }
}

const eva = new Student('Eva', 'Arts', [95,75,83]);
const georgi = new Student('Georgi', 'Eng', [100, 95, 100])

// console.log(eva);
// console.log(eva.gpa());
// eva.addGrade(100);
// console.log(eva);
// console.log(eva.gpa());

//---------------------------------------------------------










