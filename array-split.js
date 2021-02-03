// jokhon slice korbo
/*

const nums = [1,2,3,4,5,6,7,8];
const part = nums.slice(2,5);
console.log(part);
//origin array akoi
console.log (nums); */

//splice
/*const nums = [1,2,3,4,5,6,7,8];
const removed = nums.splice(2,5);
console.log(removed);
//origin array akoi
console.log (nums); */

// splice with add
/*const nums = [1,2,3,4,5,6,7,8];
const removed = nums.splice(2,5,77,88,99);
console.log(removed);
//origin array akoi
console.log (nums); */

//array join element
//ak satha asba
/*const nums = [1,2,3,4,5,6,7,8];
const removed = nums.splice(2,5,77,88,99);
const together = nums.join("");
console.log(together); */

//()dela sudu number  asba coma, deya
/*const nums = [1,2,3,4,5,6,7,8];
const removed = nums.splice(2,5,77,88,99);
const together = nums.join();
console.log(together); */

// maja white sp asba (" ")
/*const nums = [1,2,3,4,5,6,7,8];
const removed = nums.splice(2,5,77,88,99);
const together = nums.join(" ");
console.log(together); */

//coma , deya asba (",")
/*
const nums = [1,2,3,4,5,6,7,8];
const removed = nums.splice(2,5,77,88,99);
const together = nums.join(",");
console.log(together); */

//jodi lakha deta chai maja(ami)
const nums = [1,2,3,4,5,6,7,8];
const removed = nums.splice(2,5,77,88,99);
const together = nums.join("ami");
console.log(together);