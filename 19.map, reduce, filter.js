/**
 * 1. map: 배열 내의 모든 요소 각각에 대하여 주어진 함수를 
 호출한 결과를 모아 새로운 배열로 반환한다.
 */
const mapArr = [1, 4, 9, 16];

const map = mapArr.map(x => x * 2);

console.log(map); // [2, 8, 18, 32]

/**
 * 2. reduce(누산기acc, 현재값cur, 현재인덱스idx, 원본배열src)
 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고
 하나의 결과값을 반환한다.
 */

 const arr_reduce = [1, 2, 3, 4];
 const reducer = (accumulator, currentValue) => accumulator + currentValue;

 // 1+2+3+4
 console.log(arr_reduce.reduce(reducer)); // 10

 // 5+1+2+3+4
 console.log(arr_reduce.reduce(reducer, 5));

 /**
  * recuce()는 하나의 콜백함수를 가지며
  이 콜백함수는 이전값, 현재값(배열안의 요소)를 가지고 작업을 한다.
  주로 누적된 값을 구할 때 많이 사용한다.
  */



  /**
   * 3. filter: 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 리턴
   */

   const words = ['boolean', 'instanceof', 'string', 'number', 'null', 'undefined'];
   const result = words.filter(word=> word.length > 6); // ["boolean", "instanceof", "undefined"]
   console.log(result);