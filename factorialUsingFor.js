function fact(n) {
    let factorial =1;
    for(let i=1;i<=n;i++){
        factorial=factorial*i;
    }
    return factorial;
}
let result = fact(5);
console.log(result);