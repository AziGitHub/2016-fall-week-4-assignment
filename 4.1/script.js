/**
 * Created by siqi on 9/24/16.
 */

//Given this empty array, perform the following tasks

var arr1 = [];


//Task 1: populate the empty array with 10 random, *rounded*, numbers between 0 and 100
//Hint: within a 'for' loop, use 'Math.random() * 100' and 'Math.round()'

function PupulateArray(){
    for(var i=0;i<10;i++){
        arr1.push(Math.round(Math.random()*100));
    }
}

PupulateArray();
console.log(arr1);
console.log("---");


//Task 2: remove the first element in the array and log it in console
//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

arr1.splice(0, 1);
console.log(arr1);
console.log("---");


//Task 3: remove the last element in the array, and log it in console
//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

arr1.splice(arr1.length-1, 1);
console.log(arr1);
console.log("The number of elements in arr1 now is: " + arr1.length );


//Question: how many elements does arr1 have at this moment?


//Task 4: given a new empty array arr2, populate it with the exact same values as in arr1
//...but in reverse order
//Hint: use the '.unshift()' method of array. Can you look up the API for it?

var arr2 = [];

function ReversePupulate(){
    for(var i=0;i<arr1.length;i++){
    	arr2.unshift(arr1[i]);
	}
}


ReversePupulate();
console.log("the reverse is:")
console.log(arr2);


//Task 5 OPTIONAL: filter out all the odd values in arr1, keeping the even values
//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

var arr3 = arr1.filter(function(element){
if(element % 2==0){
     return true;
    }
});

console.log(arr3);



