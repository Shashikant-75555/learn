/* Primitive datatype

 7 types : String , Number , Boolearn , null , undefined , Symbol , BigInt

*/

const score = 100
const scoreValue = 100.3

const ioutsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
console.log(id)
console.log(anotherId)



//const bigNumber = 3827687837223764n



/*
  Non-Primitive datatype (Reference)

  Array , Objects , Functions

 */

//  const heros = [ " shaktiman","naagraj","doga"];
  /*let myObj= {
     name : "shashi"`
     agww : 22;
    */



 //+++++++++++++++++++++++++++++++++++++++++++++++++
 //  Stack (Primitive), Heap (Non-Primitive)

 let myYoutubename = "shashikantdotcom"

 let anothername = myYoutubename
 anothername = "hivicky"

 console.log(myYoutubename);
 console.log(anothername);

 let userOne = {
  email : "user@google.com",
  upi : "user@ybl"
 }
 let userTwo = userOne

 userTwo.email = "sucess@gmail.com"
  