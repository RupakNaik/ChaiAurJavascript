let score = "69"
let magicScore = "69hammm"
let temperature = null
let office_address = undefined;
let instock = true

console.log("typeof score: ",typeof(score),"|", score);
console.log("typeof magicScore: ",typeof(magicScore),"|", magicScore);
console.log("typeof temperature: ",typeof temperature,"|", temperature);
console.log("typeof office_address: ",typeof office_address,"|", office_address);
console.log("typeof instock: ",typeof instock,"|", instock);


let scoreValueInNumber = Number(score);
let magicScoreValueInNumber = Number(magicScore);
let temperatureValueInNumber = Number(temperature);
let office_addressValueInNumber = Number(office_address);
let instockValueInNumber = Number(instock);

console.log(" ");
console.log("--- Trying Converting variables to Number type ---");
console.log(" ");

console.log("typeof scoreValueInNumber:",typeof scoreValueInNumber); //number
console.log(scoreValueInNumber); //69

console.log("typeof magicScoreValueInNumber:",typeof magicScoreValueInNumber); //number
console.log(magicScoreValueInNumber); //NaN

console.log("typeof temperatureValueInNumber:",typeof temperatureValueInNumber); //number
console.log(temperatureValueInNumber); //0

console.log("typeof office_addressValueInNumber:",typeof office_addressValueInNumber); //number
console.log(office_addressValueInNumber); //NaN

console.log("typeof instockValueInNumber:",typeof instockValueInNumber); //number
console.log(instockValueInNumber); //1

console.log(" ");
console.log("--- Trying Converting variables to Boolean type ---");
console.log(" ");

let isLoggedIn = 1
let email = ""

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

let booleanEmail = Boolean(email);
console.log("booleanEmail:",booleanEmail);

// 1 => true, 0 => false
//"" => false
//"abc" => true

console.log(" ");
console.log("--- Trying Converting variables to String type ---");
console.log(" ");

let someNumber = 23
let stringNumber = String(someNumber);
console.log(typeof stringNumber, "|", stringNumber);
