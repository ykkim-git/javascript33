/**
  복습
  * 'new'연산자: 유사한 객체를 여러개 만들어야 할 때
    복수의 사용자, 메뉴 내 다양한 아이템을 객체로 표현하려고 할 때
    new 연산자와 생성자 함수를 사용하면 유사한 객체 여러개를 쉽게 만들 수 있다.

  * Person_proto.prototype이라는 빈 Object가 어딘가에 존재하고
    Person_proto 함수로부터 생성된 객체(kim, park)들은 어딘가에 존재하는
    Object에 들어있는 값을 모두 가져다 쓸 수 있다.
    즉 eyes와 nose를 어딘가에 있는 빈 공간에 넣어놓고 kim과 Park이 공유해서 사용하는것
*/

/**
 * 자바스크립트에서 없는 클래스라는 개념 대신 프로토타입이다. (js는 프로토타입 기반 언어다)
 * es6 에서는 Class문법이 추가되었다.
 */

 function Person() {
   this.eyes = 2;
   this.nose = 1;
 }

 var kim = new Person();
 var park = new Person();

 console.log(kim.eyes); // 2
 console.log(kim.nose); // 1

 console.log(park.eyes); // 2
 console.log(park.nose); // 1

 console.log('kim : ', kim);
 console.log('------------');

 /**
  * kim과 park은 eyes와 nose를 공통적으로 가지고있는데,
  * 메모리에는 eyes와 nose가 두개씩 총 4개 할당된다.
  * 객체를 100개 만들면 200개의 변수가 메모리에 할당된다.
  * 이런 것들을 프로토타입으로 해겷한다. ↓
  */

  function Person2() {}

  Person2.prototype.eyes = 3;
  Person2.prototype.nose = 4;

  var choi = new Person2();
  var lee = new Person2();

  console.log('choi: ', choi);
  console.log(choi.eyes); // 2
  console.log(choi.nose); // 1

  console.log(lee.eyes); // 2
  console.log(lee.nose); // 1

  /**
  전자는 new를 할 때마다 각 객체에 2개씩 내부 프로퍼티를 "새로 생성" 시키기 때문에 
  new를 100번했다 치면 200개의 프로퍼티가 새로 만들어져 메모리를 그만큼 더 먹는 것이고,
  
  후자는 new를 해도 그냥 단순히 Person2의 프로토타입에 있는 값을 "참조" 하기만 하기 때문에
  new를 100번 한다 하더라도 메모리를 추가적으로 먹지 않아 효율적이라고 하는 것
  */

  
  /**
  * Prototype Link와 Prototype Object
  */
  
  function Person3() {} 
  var personObject = new Person3(); //함수로 객체를 생성
  
  /**
  * 함수가 정의될 때 일어나는 일 
  */
  
  /**
  1. 해당 함수에 생성자 자격 부여
  var obj = {};
  var a = new obj(); // obj is not a constructor
  */
  
  /**
  * 2. 해당 함수의 Prototype Object생성 및 연결
  함수를 정의하면 함수만 생성되는 것이 아니라 Prototype Object도 같이 생성된다.
  생성된 함수는 prototype 이라는 속성을 통해 Prototype Object에 접근가능
  prototype Object는 일반적인 객체와 같고 기본속성으로 constructor와 __proto__를 갖고있다.
  
  constructor는 function Person() 을 가리키고 있다.
  */ 

  /**
   * choi,lee가 직접적으로 eyes, nose를 가지고있지 않기 때문에
    찾을 때 까지 __proto__(Prototype Object)를 사용하여 상위 프로토타입을 탐색한다. 
    이렇게연결되어 있는 형태를 프로토타입 체인이라고 한다.
   */
