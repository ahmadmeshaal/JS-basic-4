const students = [
    "Ahmad",
    "Omar",
    "Yousef",
    "Mohammad",
    "Ali",
    "Khaled",
    "Othman",
    "Hamza",
    "Zaid",
    "Tareq",
    "Yazan",
    "Laith",
    "Anas",
    "Samer",
    "Hassan",
    "Mahmoud",
    "Rami",
    "Fadi",
    "Amr",
    "Baraa",
    "Lina",
    "Sara",
    "Aya",
    "Noor",
    "Dana",
    "Lama",
    "Hala",
    "Farah",
    "Maya",
    "Leen",
    "Rana",
    "Jana",
    "Malak",
    "Reem",
    "Dina",
    "Salma",
    "Samar",
    "Yara",
    "Nour",
    "Jouri",
    "Batool",
    "Razan",
    "Tasneem",
    "Rawan",
    "Aseel",
    "Ruba",
    "Mariam",
    "Haneen",
    "Shahd",
    "Esraa"
];

const pet=["cat","dog"]

const both=students.concat(pet)
console.log(both)

const sorted=students.sort();
console.log(students)

const rev=students.reverse();
console.log(students)

const inc=students.includes("Ali");
console.log(inc)

students.forEach(function(name){
    console.log(name);
})


