/**
 * 클로저: 스코프에 따라서 내부함수의 범위에서는 외부함수 범위에있는 변수에 접근이 가능하지만
  외부함수에서 내부함수는 접근이 불가능하다.
 */

 // ex1
 function init() {
   let name = 'mozilla';
   function displayName() { // 내부함수이며 클로저.
    let name_closure = 'closure name!'
    console.log(name);
   }
   displayName();
  //  console.log(name_closure); // name_closure is not defined
 }
 init(); // mozilla 출력

 function makeFunc() {
   let name = 'mozilla !';
   function displayName() {
     console.log(name);
   }
   return displayName;
 }
 let myFunc = makeFunc();
 // myFunc변수에 displayName을 리턴함.
 myFunc();
 // 리턴된 displayName 함수를 실행(name 변수에 접근);

 /**
  * 위에서 displayName함수가 return되었을 때 makeFunc()함수의
  name은 사용할 수 없는 것처럼 보이지만 자바스크립트는 함수를 리턴하는 순간
  closure라는 것을 생성하는데 이 클로저는 클로저가 셍성될 당시의 함수와 함수가
  선언된 어휘적 환경의 조합(lexical scoping)을 기억하고 있어서 makeFunc의 name을 사용할 수 있다.
  * 
  */





  /**
   * 렉시컬 환경
   자바스크립트 코드를 실행할 때 컴파일 단계에서 일어나는 몇가지 일 중 하나인
   '토크나이징'과 '렉싱'이 있다.

   토크나이징은 문자열을 나누어 '토큰'이라는 조각으로 만드는 과정이다.

   // 일반
   var num = 5; 

   // 토크나이징
   var
   num
   =
   5
   ;

   렉스타임
   토큰 처리과정에서 토큰을 분석하여 생성된 토큰에 의미를 부여하는 것을 렉싱이라고 하며
   이 과정을 렉스타임이라고 한다.
   */


   /**
    * 렉시컬 스코프: 개발자가 코드를 작성할 때 변수를 어디에 작성하는가를 바탕으로
    렉스타임에 토큰이 분석되며 스코프가 결정된다. 이때 구성된 스코프를 렉시컬 스코프라한다.
    */

    var a = 10; // global
    function foo() { // foo
      var b = 10;
      function bar() { // bar
        var c = 10;
        console.log(`a+b+c : ${a + b + c}`); // 30
      }
      bar();
    }
    foo();
    /**
     * 1. console.log(a+b+c) -- 각각 a b c 에 대한 검색이 필요.
     2. bar 내부에서 a를 찾지만 없다. 상위 스코프에서 검색을 실행한다.
     이것을 스코프 체인이라고 부른다. foo 에서 a를 찾지만 없다.
     마지막으로 global스코프에서 a를 검색한다.
     3. b에 대해 2번 작업을 실행한다. (검색)
     4. c는 bar스코프에 있는 변수이기 때문에 바로 검색이 가능하다.
     5. 결과로 30을 출력함.
     */


    // 하위에서 global을 참조 할 수 있는 간단한 예제
    // 스코프 검색은 기본적으로 하위에서 상위는 되지만 상위에서 하위로는 검색이 불가
    var aa = 10;
    function fooo() {
      var bb = 10;
      console.log(aa); // 10
      console.log(bb); //10
    }
    console.log(bb); // error bb is not defined