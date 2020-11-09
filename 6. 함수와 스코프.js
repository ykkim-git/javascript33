/**
 * 1. 전역 스코프: 변수가 모든 함수에 속하지않고 {} 괄호안에 들어있지 않은 경우
 */

const globalVariable = 'some value';
const hello = 'hello! ! ';

function sayHello() {
  console.log(hello); 
}
console.log(hello); // hello ! !
sayHello(); // hello ! !

// Don't do this!
var thing = 'something'
var thing = 'something else' // perhaps somewhere totally different in your code
console.log(thing) // 'something else'

/**
 * 2. 지역 스코프 (Local Scope)
 */

/**
 * 2-1. 함수 스코프
 * 함수 내에서 변수를 선언했을 때 함수 안에서만 변수에 접근가능
 */

 function sayHello2() {
   const hello2 = 'hello !';
   console.log(hello2);
 }
 sayHello2(); // hello !
//  console.log(hello2); // hello2 is not defined

/**
 * 2-2. 블록 스코프
 */
 {
   const hello3 = 'hello3 !';
   console.log(hello3); // hello 3!
 }
//  console.log(hello3); // hello3 is not defined

 /**
  * 2-3. 함수 호이스팅과 스코프
  function 키워드와 함께 선언된 함수들은 스코프의 최상단으로 호이스팅된다.
  2-3-1 과 2-3-2의 결과는 같다.
  */

  // 2-3-1
  sayHello4();
  function sayHello4() {
    console.log('hello 4!');
  }

  // 2-3-2
  function sayHello4() {
    console.log('hello 4 !');
  }
  sayHello4();

  // 함수 표현식으로 작성하면 호이스팅되지 않는다. 사용전에 미리 선언하자.
  // sayHello5(); // Error! sayHello4 is not defined;
  const sayHello5 = function() {
    console.log('hello 5 !');
  }

  // 함수는 각자의 스코프에 접근할 수 없다.
  function first () {
    const firstFunctionVariable = `I'm part of first`;
  }
  
  function second () {
    first();
    console.log(firstFunctionVariable); // Error, firstFunctionVariable is not defined
  }
  // second();

/* 예시 */
var sum = 5;
sum = sum + i;
function sumAllNumbers() {
    // ...
}
var i = 10;

/* js 해석기에 따른 순서 재조정 결과 */
// #1 - 함수 선언식과 변수 선언을 hoisting
var sum;
function sumAllNumbers() {
    // ...
}
var i;
// #2 - 변수 대입 및 할당
sum = 5;
sum = sum + i;
i = 10;


  /**
   * 3. 내부 스코프
   * inner function은 outer function의 변수에 접근가능 (lexical scoping)
   * outer function에서는 inner의 변수에 접근 불가
   */
   console.clear();
   function outerFunction() {
     const outer = 'i`m the outer function!';

     function innerFunction() {
       const inner = 'i`m the inner function';
       console.log(outer); // i`m the outer function!;
     }
    //  console.log(inner);  // Error, inner is not defined
   }
  //  outerFunction();
  // 안에서는 바깥이 보이지만, 바깥에서는 안이 보이지 않는 자동차 선팅같은 구조

  /**
   * 4. 클로저 (안쪽함수)
   * 사용하는 이유 : 어떤 함수 내에서 자신의 스코프가 아닌 변수들을 제어하는 것 때문에
   * private 변수를 만들기 위해서
   */

   function outerFunction2() {
     const outer = 'i see the outer variable!';

     return function innerFunction2() {
       console.log(outer);
     }
   }
   outerFunction2()(); // i see the outer variable!

  /**
  * 4-1. 클로져로 사이드 이펙트 제어
  */
  function prepareCake (flavor) {
    return function () {
      // debugger // 클로져 내 디버깅
      setTimeout(_ => console.log(`Made a ${flavor} cake!`), 1000);  
    }
  }
  
  const makeCakeLater = prepareCake('banana!');
  
  // and later in your code
  makeCakeLater();
  // Made a banana cake!

  /**
   * 4-2. 클로져로 private 변수 만들기, private 변수 접근하기
   */
   function secret (secretCode) {
    return {
      saySecretCode () {
        console.log(secretCode);  
      }
    }
  }
  
  const theSecret = secret('CSS Tricks is amazing');
  theSecret.saySecretCode()
  // 'CSS Tricks is amazing'

  /**
   * 4-3. 개발자도구로 스코프 디버깅
   내부에 debugger라는 키워드를 추가하면 브라우저에서 js실행을 일시정지하고 디버그한다.
   */
   function prepareCake2 (flavor) {
    // add devugger
    // debugger
    return function () {
      debugger
      setTimeout(_ => console.log(`Made a ${flavor} cake!`), 1000);  
    }
  }
  
  const makeCakeLater2 = prepareCake2('banana!');

  // 4-3-1. 클로저 간단 예제
  function counter() {
    let count = 0;

    function add() {
      count++;
      console.log(`count : ${count}`);
    }
    return add;
  }
  const increaseNum = counter(); 
  // counter(); // function add()
  increaseNum();

  /**
   * counter 함수를 실행 함으로써 add 함수가 반환되는데 
   중요한 점은 counter 함수가 실행 된 후에도 
   반환된 내부 함수를 통해 count 변수에 접근이 가능 하다는 것이다. 
   즉, count 변수와 반환된 함수를 포함하는독립된 환경이 생성된 것이다.
   */