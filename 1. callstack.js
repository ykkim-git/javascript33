/**
 * 호출 스택 (Call Stack)
 * 자바스크립트는 싱글 쓰레드 기반 언어임 (호출스택이 하나임);
 * 따라서 한 번에 한 작업만 처리 가능
 * 
 * 호출스택은 우리가 프로그램 상에서 어디에 있는지 기록하는 자료구조임
 * 함수를 실행하면 함수는 호출스택의 가장 상단에 위치하고
 * 함수의 실행이 끝날 때 (return) 해당 함수를 호출스택에서 제거함.
 * 
 */
 function multiply(x, y) {
   return x * y;
 }
 function printSquare(x) {
   var s = multiply(x, x);
   console.log(s);
 }
 printSquare(5);

 /**
  * 처음 엔진이 이 코드를 실행할 때는 콜스택이 비어있지만
  * 코드가 실행되면서 아래와 같이 변화한다.
  
  // 1.
  printSquare(5)
  
  // 2.
  multiply(x, x)
  printSquare(5)
  
  // 3.
  console.log(s)
  printSquare(5)
  
  // 4.
  printSquare(5)
  
  */

 function foo() {
  throw new Error('SessionStack will help you resolve crashes :)');
  }
  function bar() {
    foo();
  }
  function start() {
    bar();
  }
  //start();

  /**
   * foo 함수가 반복적으로 자신을 다시 호출하는 재귀 호출을 하면
   * 실행 할 때마다 호출 스택에 foo()가 쌓여서 콜스택 최대치를 넘으면 
   * Maximum call stack size exceeded 에러가 발생함.
   */
  function foo() {
    foo();
  }
  //  foo(); 

  /**
   * 힙 : 오브젝트들은 힙 내부에 할당된다.
   * 힙은 거의 구조화되지 않은 영역의 메모리다.
   * 변수와 객체들의 모든 메모리 할당은 여기서 일어나게 된다.
   * 
   * 큐 : 자바스크립트 런타임은 메시지 큐를 갖고있다.
   * 메시지 큐는 실행될 콜백함수나 실행될 메시지의 리스트이다.
   * 스택이 충분한 공간이있을 때 메시지는 큐 밖으로 나오게되고 메세지가 갖고있던 함수목록이 실행된다.
   * 스택이 다시 빌 때 메시지 수행도 끝난다.
   */