function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0)
            return "It is not a Prime number";
    }
    return "It is a Prime number"
}
var result = isPrime(33);
console.log(result);