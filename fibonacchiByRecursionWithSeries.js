function fibonacchi(n) {
    if(n==0){
        return [0];
    }
    else if(n==1){
        return [0,1];
    }
    else{
        let fibo = fibonacchi(n-1);
        let nextElement= fibo[n-1]+fibo[n-2];
        fibo.push(nextElement);
        return fibo;
    }
}
var result = fibonacchi(10);
console.log(result);