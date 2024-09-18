//1:Arrays summary
//syntax:
//variable_keyword = [val1,val2 ...valn]
let daysOfTheWeek = [
  "monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
//Size of the array
//syntax: arrayNama.length
let sizeOfArray = daysOfTheWeek.length;
//display element in array
//syntax arrayName[index from 1-length-1]
let i = 2; //set index to ur wish
let item = daysOfTheWeek[i];
 
   //Arrays Methods
 //push("item") adds item to an array
   console.log (daysOfTheWeek.push("newDay"));
//pop() removes item in array
 console.log(daysOfTheWeek.pop());
//shift() removes new item in beginning if array
daysOfTheWeek.shift();
//unshift("item")adds new item at the beginning of an aray
daysOfTheWeek.unshift("itemAdded")
//indexOf("item"):returns index of first value
let indexOfItemSpecified=daysOfTheWeek.indexOf("Wednesday");
//lastIndexOf("item"):returns index of last value
let indexOfLastItem =daysOfTheWeek.lastIndexOf('Wednesday');
//toString joins array elements with a comma
let arrayString= daysOfTheWeek.toString();

//join joins arrays with specified separator
let joinedArrayString= daysOfTheWeek.join(".=>>")
//at return value at specified index
let itemAtSpecifiedIndex=daysOfTheWeek.at(0);
//concat joins two arrays
let array1=[1,2,3,4],array2=[5,6,7,8,9];
let joinedArray=array1.concat(array2);

//go to mdndocs for more arrays.
 //sample projects
 //1:function to input a string and display reversed string

 let reverseString=(stringItem)=>{
let splitedString=stringItem.split("");
console.log(typeof(splitedString));
 }
