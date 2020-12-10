/**
 * 1. async: return 값으로 Promise를 준다.
 */

async function fetchUser() {
  // async를 앞에 붙이면 프로미스로 바로 만들 수 있다.
  // network request in 10 secs....
  return "ellie";
}
const user = fetchUser();
user.then(console.log);
console.log(user);

/**
 * 2. await: promise가 안정된 결과값을 반환할 때까지 기다려준다.
 async가 붙은 함수안에서만 사용가능
 */
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  });
}

async function getApple() {
  await delay(2000);
  return "🍎";
}

async function getBanana() {
  await delay(3000);
  return "🍌";
}

// ex: promise chaining
/**
 * 
 function pickFruits() {
   return getApple().then((apple) => {
     return getBanana().then((banana) => {
       return `${apple} + ${banana}`;
      });
    });
  }
  pickFruits().then(console.log);
  */

// async & awiat
async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}
pickFruits().then(console.log);


// 사과와 바나나가 연광성이 없이 병렬적으로 처리하려면
function pickAllFruits() {
  // 프로미스 배열을 전달하면 모든 프로미스가 병렬적으로 다 받을 때 까지 모아준다.
  return Promise.all([getApple(), getBanana()])
  .then(fruits => fruits.join(' + ')); // 배열을 string으로 묶을 수 있는 join사용
}
pickAllFruits().then(console.log);


// 어떤것이든 상관없이 먼저 호출되는 것을 가져오고 싶을 때
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log); // apple출력