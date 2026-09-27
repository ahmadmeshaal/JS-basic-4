let inventory = [
    {
        id: 1,
        name: "Laptop",
        price: 850,
        category: "Electronics",
        quantity: 10
    },
    {
        id: 2,
        name: "Keyboard",
        price: 45,
        category: "Electronics",
        quantity: 25
    },
    {
        id: 3,
        name: "Mouse",
        price: 20,
        category: "Electronics",
        quantity: 40
    },
    {
        id: 4,
        name: "Headphones",
        price: 60,
        category: "Electronics",
        quantity: 15
    },
    {
        id: 5,
        name: "Notebook",
        price: 5,
        category: "Stationery",
        quantity: 50
    },
    {
        id: 6,
        name: "Pen",
        price: 2,
        category: "Stationery",
        quantity: 100
    },
    {
        id: 7,
        name: "Backpack",
        price: 35,
        category: "Accessories",
        quantity: 20
    },
    {
        id: 8,
        name: "Water Bottle",
        price: 12,
        category: "Accessories",
        quantity: 30
    },
    {
        id: 9,
        name: "Desk Lamp",
        price: 25,
        category: "Home",
        quantity: 12
    },
    {
        id: 10,
        name: "Coffee Mug",
        price: 8,
        category: "Home",
        quantity: 35
    }
];


inventory.sort(function(a,b){
    return b.price - a.price ;
})
console.log(inventory);




let isAvailable = inventory.some(function(a){
    return a.category === "Home";
});
console.log(isAvailable);




let availableCategories = [
    "Electronics",
    "Stationery",
    "Accessories",
    "Home"
];
let isAvailable2 = availableCategories.includes("Home");
console.log(isAvailable2);



inventory.splice(3, 1);
console.log(inventory);



let first5=inventory.slice(0,5)
console.log(first5);


let inventory2 = [
    {
        id: 55,
        name: "Lap",
        price: 850,
        category: "Electronics",
        quantity: 14
    },
    {
        id: 44,
        name: "top",
        price: 80,
        category: "Electronics",
        quantity: 16
    },
   
];


let inventory3=inventory.concat(inventory2)
console.log(inventory3);
