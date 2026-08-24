// //increasing star pattern
// let n = 5
// for (let i = 1; i <= n; i++){
//     console.log("* ".repeat(i));
// }

// // decreasing star pattern
// let n = 5
// for(let i = n; i >= 1; i--){
//     console.log("* ".repeat(i))
// }


// // pyramid star pattern
// let n = 5
// for (let i = 1; i <= n; i++){
//     console.log(" ".repeat(n - i) + " * ".repeat(i))
// }

// 

// let n = 5
// for (let i = n; i >= 1; i--){
//     console.log(" ".repeat(n - i) + " * ".repeat(i))
// }

// let n = 4
//     // 1. Upper pyramid
//     for (let i = 1; i <= n; i++) {
//         let spaces = " ".repeat(n - i);
//         let numbers = i.toString().repeat(2 * i - 1);
//         console.log(spaces + numbers);
//     }

//     // 2. Lower inverted pyramid
//     for (let i = n - 1; i >= 1; i--) {
//         let spaces = " ".repeat(n - i);
//         let numbers = i.toString().repeat(2 * i - 1);
//         console.log(spaces + numbers);
//     }


n = 4
    // 1. Upper wings (including the middle joint row)
    for (let i = 1; i <= n; i++) {
        let stars = "*".repeat(i);
        let spaces = " ".repeat(2 * (n - i));
        console.log(stars + spaces + stars);
    }

    // 2. Lower wings (symmetrical inversion)
    for (let i = n - 1; i >= 1; i--) {
        let stars = "*".repeat(i);
        let spaces = " ".repeat(2 * (n - i));
        console.log(stars + spaces + stars);
    }