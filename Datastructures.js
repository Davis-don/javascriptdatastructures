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
   daysOfTheWeek.push("newDay");
//pop() removes item in array
 daysOfTheWeek.pop();
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
let reversedString=splitedString.reverse();
return reversedString
 }
 /////////Objects
 //Data structure storing data in key value pairs
 //declaring object
 const student={
  fName:"Davis",
  lName:"Ikou",
  age:22,
  course:"BSC Mathematics & Computer Science",
  year:"2020",
  displayFullNames:function display(){
    return this.fName + " " + this.lName;
  }
 };
 //accessing 
 //1 dot operator
 const fullNames= student.fName + " " + student.lName;
 //bracket notation
 const fullNames1= student['fName'] + student['lName'];
  //methods
  //1:object.keys
const keys=Object.keys(student);
//2:object.values
const values=Object.values(student);
//3:Entites
const Entries=Object.entries(student);
//4object.freeze
//stops from adding or deleting any property in container

//object.getPropertyName
const propertyName=Object.getOwnPropertyNames(student);

//objectName.hasOwnPropert
const proof = student.hasOwnProperty("age");
//delete objName.property
delete student.age;

//methods
let fullNamesThroughFunction= student.displayFullNames;

//NB never use this keyword in method in form of arrow function

////strings
//characters enclosed in single quotes or double quotes
 const username="Davis Mugo"
 //Methods
 //1:charAt
 let positionOfChar=username.charAt(6);
//2:concat
let other="My name is" + " ";
let fullSentence= other.concat(username);
//3:Indexof
let position1=fullSentence.indexOf("D");
//4:lastIndexOf
//RETURNS LAST position of text/string specified
//5:replace
let newString=fullSentence.replace("Davis","Annisia");
//6:replaceAll()
//replaces all items specified 
//7:split("specify_separator")
let arrayItems=fullSentence.split("i");
//8:toLowerCase
let lowerCaseItems=fullSentence.toLowerCase();
//8:toUpepr Case
let upperCaseItems=fullSentence.toUpperCase();
//9trim() removes white spaces
let testItemTrim="   helooo Davis";
let newTestItemTrim=testItemTrim.trim();
//10:endswith()
let testItemendswith="Helooo Davis";
let valreturned= testItemendswith.endsWith('s');

  //11:startsWith
   let valreturned2=testItemendswith.startsWith('H');
   

//12:includes
let valreturned3=testItemendswith.includes('anisia');

//13:seach
let val4=testItemendswith.search('a');

/////sets
//datastructure containing unique elements
//initialise1
const mySet=new Set([1,2,3,4,5,6,1,2,3,4])
//initialise2 empty set
const myset2=new Set();

//methods
//1:add(value)
//2:delete(value)
//3:has()
//4:clear()
//5:size();

