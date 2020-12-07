/**
 * 1. 순수함수: 함수 밖에있는 값들은 변경하지 않는다.
 */
//  let values = { a: 10 }

//  function impureFunction(items) {
//    let b = 3;
//    items.a = items.a * b + 2;
//    return items.a
//  }
//  let c = impureFunction(values);
//  console.log(c); // 202
 // 함수가 values객체의 a 값을 바꿔버려서 순수함수가 아니다.

 var values = { a: 1 }

 function pureFunction(a) {
   var b = 1
 
   a = a * b + 2
 
   return a
 }
 
 var c = pureFunction(values.a)
 console.log(c);
 // `values.a` has not been modified, it's still 1

 // 함수 스코프 외에 값을 변경하지 않고 함수 자체에서 값을 수정
 // 순수함수로 프로그래밍 하는 것을 함수형 프로그래밍이라고 한다. 에러도 적고 코드 유지보수에 좋다

 /**
  * 부수효과:함수 외부의 값을 변경하는 경우다.
  */

  /**
   * 상태 변이: 자바스크립트에서 2가지 타입으로 나뉘어지는데
   primitive type / reference type이다.
   primitive type은 변경될 수 있고 reference type도 참조로 변경 가능하다.
   자바스크립트는 불변과 거리가 멀다. 런타임 언어이기 때문이다.

   Object.freeze / const 등 값이 변경되는 것을 방지하도록 한다.
   */