//find the length of array
const arr=[1,2,3,4,5,6,67,5];
const len=arr.length;
console.log(len);

//changing array element 
arr[2]="chandan";
console.log(arr[2]);


//converting an array to string
const fruits=['apple','banana','orange'];
console.log(fruits.toString());

// push opertaion -add element to last
fruits.push('pomegranate');
console.log(fruits);

// pop operation - remove last element
fruits.pop();
console.log(fruits);

// add element to start position
fruits.unshift('mango');
console.log(fruits);

// remove first element by using shift property
fruits.shift();
console.log(fruits);

//remove element from any particular position by using splice property
fruits.splice(1,2);
console.log(fruits);

//indexof - it is used to find the index of word
let name='my name is chandan singh or thakur chandan';
// const index=name.indexOf('chandan',12);
let ind=name.indexOf('chandansingh');
console.log(ind);

//lastindexOf use
console.log(name.lastIndexOf('chandan',34));

//includes method check whether value is present in array or not it return true or false
let val=['1','chandan','2','3','singh'];
console.log(val.includes('4'));

//concat method return new array after combining two or more array
let num=[31,12,3,4];
let num_2=[7,8,9];
let num_3=[11,23,45];

let newarr=num.concat(num_2,num_3);
console.log(newarr);

//sort function alphabetically sort num
let ans=num.sort();
console.log(ans);
//sort in ascending order
let sorting = function compared(a,b){
    return a-b;
}
console.log(num.sort(sorting));


