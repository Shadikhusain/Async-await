const cart = ["Pizza", "Coke", "sandwich"];

function placeOrder(cart) {
    console.log("Talking with Domino's");

    const pr = new Promise(function(resolve, reject) {

        setTimeout(() => {

            const food_available = true;
            if (food_available) {
                console.log("Order Placed Succesfully");
                const order = { orderId: 221, food: cart, restaurant: "Dominos", location: "Dwarka" }
                resolve(order);
            } else {
                reject("Items Out of Stocks");
            }
        }, 2000)

    })


    return pr;
}

function preparingOrder(order) {
    console.log("Pizza preparation started....");

    const pr = new Promise(function(resolve, reject) {

        setTimeout(() => {
            console.log("Pizza preparation Done");
            const foodDetails = { token: 12, restaurant: order.restaurant, location: order.location };
            resolve(foodDetails);
        }, 5000)
    })

    return pr;
};

function pickupOrder(foodDetails) {
    console.log("Reaching restaurant for picking order")

    const pr = new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log("Order picked up by Delivery Boy");
            const droplocation = foodDetails.location;
            resolve(droplocation);
        }, 3000)

    })

    return pr;

}

function deliverOrder(droplocation) {
    console.log("Delivery boy on the way");

    setTimeout(() => {
        console.log("Order Delivered succesfully");
    }, 5000)
}


// (i)asyc and await ka use--->(jabb takk values na aa jaye tabb takk next wala execute na ho)
// (ii)kyoki next task previous wale pe dependent hai
// esko hum humesha ek (async functione ke ander hi (await) ko denge)

// async function greet() {
//     const order = await placeOrder(cart);
//     const foodDetails = await preparingOrder(order)
//     const droplocation = await pickupOrder(foodDetails)
//     deliverOrder(droplocation);

// }
// greet();

// Promises ko humm direct consume nahi krr sakte---?
// const p1 = new Promise((resolve, reject) => {
//     let success = true;
//     setTimeout(() => {
//         if (success) {
//             resolve("Hello Everyone");
//         } else {
//             reject("Something Went Wrong");
//         }
//     }, 2000)
// });
// p1.then((message) => {
//     console.log("Success:", message);
// }).catch((error) => {
//     console.log("Error", error);
// })



//(i) console.log(p1); // direct consume nahi krr sakte verna output:<Pending> aayega
//(ii) p1.then((response) => console.log(response)); // (.then) se promise ko acche se consume kiya

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("First Promise Resolved");
//     }, 8000)
// })
// const p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Second Promise Resolved");
//         }, 5000)
//     })
// async function greet() {
//     const data = await p1; // ye humne await se acche se consume kiya
//     console.log(data);
//     const data2 = await p2;
//     console.log(data2);
// }
// greet();
// agar yahi work humm (.then) se karaye to kaisa output aayega--->
// p1.then(value => console.log(value));
// p2.then(value => console.log(value));

// --------------> Ek aur Level-Up kerte hai <---------------------
// agar mei esko ek function ke ander rapup krr de to (p1,p2) ko
function test1() {
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("First Promise Resolved");
        }, 5000)
    })
    return p1;
}

function test2() {
    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Second Promise Resolved");
        }, 5000)
    })
    return p2;
}

// async function greet() {
//     const data1 = await test1();
//     console.log(data1);
//     const data2 = await test2();
//     console.log(data2);

// }
// greet()
async function meet() {
    return "Hello Coder Army";
    //  agar kuch bhi return nahi krenge (undefined) return krega
    // kyoki asycn function humesha expect kerta hai ki promise return mile

}
meet().then(value => console.log(value));

// ----> ye format jyada easy hai as compare to neeche wale ke 
// problem bass ye hai--->(placeOrder wala fn ye mera (async type ka fn hai kyoki setTimeout chal raha hai) Immediately Next wale ko execute krr dega)
// (ye wait nahi krega)---> lekin mai ye nahi chahta jabb takk fn ke ander value na aaye tabb tak next wale execute na ho
// const order = placeOrder(cart);
// const foodDetails = preparingOrder(order)
// const droplocation = pickupOrder(foodDetails)
// deliverOrder(droplocation);



// placeOrder(cart)
// .then(order=>preparingOrder(order))
// .then(foodDetails=>pickupOrder(foodDetails))
// .then(droplocation=>deliverOrder(droplocation))
// .catch(error=>console.log(error));