'use strict';

/**
 * === : 타입과 값이 같아야 함.
 */
 5 == '5' // true
 5 === '5' // false
 5 === 5 // true

/**
 * == : 느슨한 동등 비교
 * 강제 형변환 (동등 연산자로 비교하기 전에 피 연산자들을
  공통 타입으로 만드는 행위))
 */ 

 77 === '77' // false (Number vs String)
 77 == '77' // true 강제 형변환
 console.log(false == 0); // true

 /**
  * false == 0 이 성립하는 이유
  자바스크립트에서 0은 falsy값이기 때문이다. 아래는 falsy값 6가지
  1. false
  2. 0
  3. ""
  4. null
  5. undefined
  6. NaN
  */

  false == 0 // true

  0 == "" // true

  "" == false // true

  /**
   * null과 undefined: 서로 같고 자기 자신과도 같다.
   */
   null == null // true
   undefined == undefined // true
   null == undefined // true

  /**
   * NaN(Not a Number): 어떠한 값과도 동일하지 않다.
   */
   NaN == null // false
   NaN == undefined //false
   NaN == NaN // false
