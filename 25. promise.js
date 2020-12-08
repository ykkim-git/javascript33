/**
 * Promise: 비동기를 간편하게 처리하도록 도와준다.
 중요 2가지
 1. state
 성공했는지 실패했는지에 대한 상태
 만들어져서 지정한 것을 수행중일 때 pending -> 
 성공적으로 끝나면 fulfilled or 에러 rejected
 
 2. producer <-> consumer 차이점
 */

// Producer
// 새로운 프로미스가 만들어질때는, 우리가 전달한 executor라는 함수가 실행된다.
// (아래에서는 resolve)
const promise = new Promise((resolve, reject) => {
  // doing some heavy works (network, read files 등)
  console.log("doing something...");
  setTimeout(() => {
    resolve("ellie");
    // reject(new Error('no network'));
  }, 2000);
});

// Consumers: then, catch, finally를 이용해서 값을 받아올 수 있다.
promise
  .then((value) => {
    console.log(value); // resolve에서 전달한 'ellie' 를 전달받음.
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
    console.log("----------------------");
  }); // 성공이든 실패하든 마지막에 호출

// Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber // 1
  .then((num) => num * 2) // 2
  .then((num) => num * 3) // 6
  .then((num) => {
    // 6
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000); // 6 - 1
    });
  })
  .then((num) => {
    console.log(num); // 5
    console.log("-------------------");
  });

// Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐔"), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    setTimeout(() => reject(new Error(`Error! ${hen} => 🥚`)), 1000); // 만약에 에러가 발생한다면
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen()
  .then((hen) => getEgg(hen)) // 한가지만 받아서 전달하는 경우 생략가능
  // .then(getEgg) 로 가능
  .catch((error) => {
    return "🤬"; // 계란을 받아오는건 실패했지만 다른거로 대체가능
  })
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal))
  .catch(console.log);
