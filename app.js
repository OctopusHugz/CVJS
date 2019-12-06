// Sets variable name equal to my name
let myName = "Colson";
// Sets number of states as a constant
const numOfStates = 50;
// Sets variable equalsNine equal to 9
let equalsNine = 5 + 4;

function sayHello() {
    console.log('Hello, World!');
}

sayHello();

function checkAge(name, age) {
    if (age < 21) {
        console.log('Sorry ' + name + ', you are not old enough to view this page!')
    };
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

let favVeggies = ["bell peppers", "tomatoes", "broccoli", "carrots", "squash", "zucchini"];

for (i = 0; i < favVeggies.length; i++) {
    console.log(favVeggies[i]);
}

let myArray = [
    {
        name: "Colson",
        age: 27
    },

    {
        name: "Morgan",
        age: 27
    },

    {
        name: "Graycen",
        age: 18
    },

    {
        name: "Rumble",
        age: 4
    },

    {
        name: "Gerald",
        age: 71
    }
]

for (i = 0; i < myArray.length; i++) {
    checkAge(myArray[i].name, myArray[i].age);
}

function getLength(string) {
    let strLen = string.length;
    
    if(strLen % 2 == 0) {
        console.log('The world is nice and even!');
    }
    else {
        console.log('The world is an odd place');
    }
}

getLength('Hello, World');