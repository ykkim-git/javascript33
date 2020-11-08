/**
 * 숫자형태가 아닌 타입에서 숫자 형태로의 변환
 */

 /**
  * 1. 문자형
  */
  3 * "3"		// 9
  3 * Number("3")	// 9
  Number("1.")	// 1
  Number("0012")	// 12
  Number("1.34")	// 1.34

  Number("1,")	// NaN
  Number("1+1")	// NaN
  Number("1a")	// NaN
  Number("one")	// one

/**
  * 2. '+' 연산자: 수학적가산, 문자열 연결 기능을 가진다.
  * 숫자형을 문자열로 변환한다.
  */
  /**
  1+"2"		// "12"
  "1"+2		// "12"
  1+"2js"		// "12js"
  
  1+2+"1"		// 31
  (1+"2")+1	// 121
  */

  /**
   * 객체형: 대부분 js객체는 [object Object]로 변환된다.
   * 모든 js객체는 객체를 문자열로 변환해주는 toString메소드를 상속받는다.
   */
   /**
  name + {} // "name[object Object]"

  const foo = {};
  foo.toString(); // [object Object]

  const baz = {
    toString: () => "run toString"
  }
  console.log(baz.toString() + "!") // "run toString!"
   */

  /**
   * 배열형: 배열형에 상속된 toString은 인자가 없는 join과 비슷하게 동작
   */
   /**
   [1,2,3].toString()	// "1,2,3"
   [1,2,3].join()		// "1,2,3"
   [].toString()		// ""
   [].join()		// ""
   
   "me" + [1,2,3]		// "me1,2,3"
   4 + [1,2,3]		// 41,2,3
   4 * [1,2,3]		// NaN
   */

   /**
    * valueOf 메소드: 객체가 숫자형이나 문자열로 예상되는 곳에
    넘겨질 때 사용하기 위해 valueOf를 정의할 수 있다
    */
    const foo = { 
      valueOf: () => 3
    }
    console.log(3 * foo); // 9

    /**
     * Falsy and Truthy: 모든 js값은 true나 false로 강제변환 될 수 있다.
     false
     0
     null
     undefined
     ""
     NaN
     -0
     */


     /**
      * NaN(Not a Number): 자신과 같지 않은 특별한 값
      */
      NaN === NaN // false
      const notANumber = 3 * "a";
      console.log(notANumber); // NaN
      console.log(notANumber == notANumber); // false
      console.log(notANumber === notANumber); // false

      // es6에서 NaN을 확ㅇ니하기 위해 Number.isNaN이 제공됨
      Number.isNaN(NaN); // true
      Number.isNaN("Number") //false
      