let product={
    id:1,
    name:"ps5",
    price:300,
    category:"games",
    available:true
}

let productJson= JSON.stringify(product);

let productObject=JSON.parse(productJson);

console.log(product)
console.log("--------------")
console.log(productJson)
console.log("--------------")
console.log(productObject)


let invalidProduct=`{
    "id":1,
    "name":"ps5",
    "price":300,
    "category":"games,
    "available":tru
}`

try {
    let ip = JSON.parse(invalidProduct);
    console.log(ip);
}
catch (error) {
    console.log("Invalid JSON");
}