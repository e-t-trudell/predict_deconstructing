// // Predict the descontructions or the errors
// // ONE
// const cars = ["Tesla", "Mercedes", "Honda"];
// const [randomCar] = cars;
// const [, otherRandomCar] = cars;
// //Predict the output
// // Tesla - first index in the list
// // Mercedes - skip first index in the list
// console.log(randomCar);
// console.log(otherRandomCar);

// TWO
// const employee = {
//   name: "Elon",
//   age: 47,
//   company: "Tesla",
// };
// const { name: otherName } = employee;
// //Predict the output
// // this would error at the first console.log as name has been reassigned so will show as not defined
// console.log(name);
// console.log(otherName);

// THREE
// const person = {
//     name: "Phil Smith",
//     age: 47,
//     height: "6 feet",
// };
// const password = "12345";
// const { password: hashedPassword } = person;
// //Predict the output
// // 12345
// // 12345 - wrong guess hashedPassword is undefined
// console.log(password);
// console.log(hashedPassword);

// FOUR
// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [, first] = numbers;
// const [, , , second] = numbers;
// const [, , , , , , , , third] = numbers;
// //Predict the output
// // first=2
// // second=5
// // third=2
// // false on  2 != 5
// // true
// console.log(first == second);
// console.log(first == third);

// FIVE
const lastTest = {
  key: "value",
  secondKey: [1, 5, 1, 8, 3, 3],
};
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
//Predict the output
// {key:'value', secondKey:[1,5,1,8,3,3]}. Wrong this should have been key because key was asssigned globally in the first const of lastTest.
// {key:'value', secondKey:[1,5,1,8,3,3]}. Wrong this should have just been the list.
// {key:'value'}. wrong this should have been the 0th index position of the list
// error. wrong this should have been 5 as with the 2 position in the list willThisWork would pull the value 5
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
