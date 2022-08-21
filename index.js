// task 1 
let user1 = {
    firstname1 : "ana",
    age1 : 28,
}

let user2 = {
    firstname2 : "levani",
    age2 : 21,
}

let info = "ანა ლევანიზე 7 წლით უფროსია";

let age1 = 28;

let age2 = 21;

let sxvaoba = age1 - age2;

console.log(sxvaoba); 

// task 2 

let students = ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den']; 

let middleelement = students [4];

console.log(middleelement); 

// task 3 

let student = {
    firstname : "lasha",
    lastname : "gogua",
    age : 26,
    subject : ["math", "chemistry", "biology", "english", "georgian"],
    roomate : {
        fullname : "guja khelashvili",
        age : 25
    }
}

let subject = ["math", "chemistry", "biology", "english", "georgian"];

for ( let i = 0; i < subject.length; i++ ) {
    console.log(subject[i]);
} 


let x = "toko purtseladze";

student.fullname = x;

console.log(student);

let y = "lasha gogua aris 26 wlis da misi rummeiti aris guja khelashvili";

student.result = y;

console.log(student);

// task 4 

let fruit = ["Banana", "Orange", "Apple", "Mango", 2, 12];

let i = 0;

while(i < fruit.length-2) {  
    console.log(fruit[i]);
    i++
}

// task 5 

let task5 = [12,23,43,11,9,2,121,90]

 for(i=0; i < task5.length; i++) {

    if(task5 [i] > 31, task5[i] % 2 == 0){
    
    console.log('Element is greater than provided value and is EVEN');

  } else console.log('Element is less than provided value and is ODD');

 } 


 



























