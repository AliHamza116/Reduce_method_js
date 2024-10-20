let val=prompt("Enter the number between 1-10:");

    let arr=[];
// loop for taking input from user and store it in the arr/array;
for(let i=1; i<=val ;i++){
   arr[i-1]=i;
}
// to print the full array
console.log(arr);
// reduced method for addition
let newArr= arr.reduce(function(pre,curr){
    return pre+curr;
});
console.log("the sum of numbers is:",newArr);
// reduced method for multiplication
 newArr= arr.reduce(function(pre,curr){
    return pre*curr;
});
console.log("the product of numbers is:",newArr);