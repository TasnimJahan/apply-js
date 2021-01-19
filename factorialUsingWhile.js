let i=1;
function fact(n) {
    let factorial= 1;
    while (i<=n) {
        factorial=factorial*i;
        i++;
    }
    return (factorial);
}
let result = fact(5);
console.log("Factorial of ", i , "is", result);



// ----------------WITHOUT USING FUNCTION----------------
// let n = 5, i= 1;
// let factorial=1;
// while (i<=n) {
//     factorial = factorial*i;
//     console.log(factorial,i);
//     i++;
// }
// console.log("the factorial of", i-1, " is = " ,factorial);