function calculateTotal(items) {
    let total;
    for (let i = 0; i < items.length; i++) {
        total += items[i].price; 
        // console.log("Item Price: ", items[i].price);

    }
    return total;
}

const cart = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 50 },
];

console.log(calculateTotal(cart));
