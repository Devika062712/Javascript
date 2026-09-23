//variable kaise bnate h
let name = "Devika";
//print krna variable ko
console.log(name);

let age = 20;

console.log (age);

//dono ko sath m print... console.log (name, age);

//kya hm variables ki values ko change kr skte h?
age = 30;

console.log(age);       //yesssss


//2nd method to make variable
const account = 2743;

console.log(account);

/*account = 93840;

console.log (accoumt); */                       //ye wale variable ki value change ni kr skte...error


//OLD METHOD TO DECLARE VARIABLE
/*
var a = 10;
console.log(a);     prints 10

var b = 20;
var b = 30;
console.log (b);        prints 30....dikkt-- ek hi variable ko multiple times declare kr skte h..let se ek variable ko sirf ek br declare kr skte h

if (true) {
    var c = 10;
}

console.log(c);         valid sirf if  ke andr hona chahiye tha lekin bhar b h.. scope se bhr... not desirable

*/

/*
datatypes-- primitive and non primitive

primitive --> number, string, boolean, undefined, null, bigint, symbol
non-primitive --> array, object, function
*/

//number.....8byte..64 bit
let num = 10;       //10.1 also
console.log(num);

//string
let s = "sentence or word";     //can also use '
console.log(s);

//boolean
let login = true;
console.log(login);

//undefined         .....const ke case m aise ni ho skta.. value sath sath hi assign krni pdti h
let user;       //declare krdia variable ko pr koi value ni dali
console.log(user);

//bigint....no. greater than 8 bytes
let n = 68757865456789n;        //last m n likhna hota h bigint batane ke lie
console.log(n);

//null
let weather = null;     //reprents intentional absence of any object value....exists but cant fetch now..not defined me exist hi ni krta
console.log(weather);

//symbol     ...unique chizo ko create krne ke lie use hota h
const id1 = Symbol("id");
console.log(id1);   
//yha dono equal nhi aaengi  
const id2 = Symbol("id");
console.log(id1 == id2);


//non primitive
//array
let arr = [34, 434, 4, 'Devika', true];
console.log(arr);

//creating object       ....key value pair m meaningful data deta h
let obj = {
    name : "Devika",
    account : 783292,
    age : 19,
    category : "OBC",
}

//function
function add() {
    return ("Hello");
}

console.log(add());

//OR

function add1 () {
    console.log("Hello");
}

add1();

//js m function ko kisi variable m store kra skte h

let d = function add2() {
console.log("YAY");
}

console.log(d);     //aiser ye bataega ki variable ke andr fun h but jo actual print krana h uske lie d(); aise likhna hoga



//kisi b variable ka type pta krne ke lie..
let e = 3892;
console.log(typeof(e));

console.log(typeof(add()));     //fun se milne wali return value ka type

console.log(typeof(add1()));

console.log(typeof(add));       //fun ka type

console.log(typeof(weather));       //yha weather null h pr ye null ki jgh iske type ko obj bol deta h and this is the biggest bug of js

//obj apna type obj bataega.. aur array b apna type obj hi bataega

