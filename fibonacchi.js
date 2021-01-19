// let fibo = [0, 1];
// for (let i = 2; i < 10; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];

// }
// console.log(fibo);



// ----------------USING FUNCTION----------------
const fibo = [0, 1];

function fibonacchi(n) {
    for (let i = 2; i < n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
var result = fibonacchi(15);
console.log(result);