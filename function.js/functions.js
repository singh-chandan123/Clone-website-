//making a function 
//function declaration
function addsum(a,b){
    const sum=a+b;
    return sum;
}

const a=13;
const b=12;
const result=addsum(a,b);
console.log(result);



//function expressions
// here we have to declare function earlier unlike in function declaration where we can declaration either earlier or after
//here their is no function name
const ans=function (num){
    return num*num;
}
console.log(ans(6));


//nested function
function sumSquare(a,b){
  
    function square(num){
        return num*num;
    }
    const c=square(a);
    const d=square(b);
    return c+d;
}
console.log(sumSquare(2,4));
