/**
 * Created by siqi on 9/24/16.
 */

//Create a function such that, given argument arr, an array, it returns the same array in reverse order

var arr1=[];


function reverseArray(arr){
    //your code here
    var temp=[];
    for(var i=0;i<arr.length;i++){
        temp.unshift(arr[i]);
    }

    return temp;
}

console.log( reverseArray([1,2,3,4,5]) ); //should log [5,4,3,2,1]