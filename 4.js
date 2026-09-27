let students = [
    { id: 1, name: "Ahmad", grade: 85 },
    { id: 2, name: "Omar", grade: 78 },
    { id: 3, name: "Yousef", grade: 92 },
    { id: 4, name: "Ali", grade: 74 },
    { id: 5, name: "Khaled", grade: 88 },
    { id: 6, name: "Hamza", grade: 81 },
    { id: 7, name: "Zaid", grade: 95 },
    { id: 8, name: "Tareq", grade: 69 },
    { id: 9, name: "Yazan", grade: 87 },
    { id: 10, name: "Laith", grade: 76 },

    { id: 11, name: "Anas", grade: 90 },
    { id: 12, name: "Samer", grade: 72 },
    { id: 13, name: "Hassan", grade: 84 },
    { id: 14, name: "Mahmoud", grade: 79 },
    { id: 15, name: "Rami", grade: 91 },
    { id: 16, name: "Fadi", grade: 68 },
    { id: 17, name: "Amr", grade: 86 },
    { id: 18, name: "Baraa", grade: 73 },
    { id: 19, name: "Nader", grade: 94 },
    { id: 20, name: "Salah", grade: 80 },

    { id: 21, name: "Lina", grade: 89 },
    { id: 22, name: "Sara", grade: 93 },
    { id: 23, name: "Aya", grade: 77 },
    { id: 24, name: "Noor", grade: 85 },
    { id: 25, name: "Dana", grade: 71 },
    { id: 26, name: "Lama", grade: 88 },
    { id: 27, name: "Hala", grade: 82 },
    { id: 28, name: "Farah", grade: 96 },
    { id: 29, name: "Maya", grade: 75 },
    { id: 30, name: "Leen", grade: 90 },

    { id: 31, name: "Rana", grade: 83 },
    { id: 32, name: "Jana", grade: 78 },
    { id: 33, name: "Malak", grade: 91 },
    { id: 34, name: "Reem", grade: 86 },
    { id: 35, name: "Dina", grade: 74 },
    { id: 36, name: "Salma", grade: 89 },
    { id: 37, name: "Yara", grade: 92 },
    { id: 38, name: "Jouri", grade: 70 },
    { id: 39, name: "Razan", grade: 87 },
    { id: 40, name: "Rawan", grade: 81 },

    { id: 41, name: "Aseel", grade: 95 },
    { id: 42, name: "Ruba", grade: 79 },
    { id: 43, name: "Mariam", grade: 84 },
    { id: 44, name: "Haneen", grade: 93 },
    { id: 45, name: "Shahd", grade: 76 },
    { id: 46, name: "Esraa", grade: 88 },
    { id: 47, name: "Tasneem", grade: 72 },
    { id: 48, name: "Batool", grade: 90 },
    { id: 49, name: "Nour", grade: 85 },
    { id: 50, name: "Samar", grade: 97 }
];


students.splice(0,0,{ id: 0, name: "Aseela", grade: 95 });
console.log(students);

students.splice(0,10);//remove 0-10 
console.log(students);

students.splice(0,10,
    { id: 1, name: "Ahmad", grade: 85 },
    { id: 2, name: "Omar", grade: 78 },
    { id: 3, name: "Yousef", grade: 92 },
    { id: 4, name: "Ali", grade: 74 },
    { id: 5, name: "Khaled", grade: 88 },
    { id: 6, name: "Hamza", grade: 81 },
    { id: 7, name: "Zaid", grade: 95 },
    { id: 8, name: "Tareq", grade: 69 },
    { id: 9, name: "Yazan", grade: 87 },
    { id: 10, name: "Laith", grade: 76 },);//remove 0-10 
console.log(students);


let copy=students.slice(0,10);
console.log(copy);

students.sort(function(a,b) {
    return  b.grade - a.grade;
});
console.log(students)

students.forEach(function(name){
    console.log(name);
})