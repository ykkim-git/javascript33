'use strict';
/**
 * 클래스는 프로토타입 기반의 상속과 생성자 함수의 문법적인 포장지이다.
 * 생성자 함수와 프로토타입 그리고 다른 연관된 개념들을 이해해야 한다.
 */
 
 /**
   * 'new'연산자: 유사한 객체를 여러개 만들어야 할 때
   복수의 사용자, 메뉴 내 다양한 아이템을 객체로 표현하려고 할 때
   new 연산자와 생성자 함수를 사용하면 유사한 객체 여러개를 쉽게 만들 수 있다.

   1. 빈 객체를 만들어 this에 할당한다.
   2. 함수본문을 실행한다. this에 새로운 프로퍼티를 추가해 this를 수정한다.
   3. this를 리턴한다.
   
   
   ex)
   function User(name) {
    this = {}; //빈 객체가 암시적으로 만들어짐)
    
    //새로운 프로퍼티를 this에 추가함
    this.name = name;
    this.isAdmin = false;

    return this; // this가 암시적으로 리턴된다
   }

   이제 let user = new User('Jack'); 코드는 
   let user = {
     name: 'Jack',
     isAdmin: false
   }
   와 동일하게 동작한다.
   */
  
   /**
    * 재사용할 필요가 없는 복잡한 객체를 만들어야 할 때
    아래와같이 코드를 익명 생성자 함수로 감싸주면 어디에도 저장되지않고
    재사용은 막으면서 코드를 캡슐화 가능하다.

    let user = new function() {
      this.name = 'John';

      // 나머지 복잡한 코드들은 여기에 작성한다.
    }
    */

    /**
     * 생성자 안에 메서드

     function User(name) {
       this.name = name;
       this.sayHi = function() {
         alert(`My Name is : ${this.name}`);
       }
     }
     let john = new User('john');
     john.sayHi(); // my name is: john

     아래 코드와 같다.
     john = {
       name: 'john',
       sayHi: function() {
         alert(`My Name is : ${this.name}`);
       }
     }
     */


     
 /**
  * 1. 생성자 함수
  * js는 모든것이 함수인 함수형 언어이기 때문에 js기능에서 클래스를 가지기 위해서는
  생성자 함수가 사용된다.

  아래 함수는 js클래스의 생성자와 거의 흡사한 기능이다.
  */

  function Vehicle(make, model, color) {
    console.log(this);
    this.make = make,
    this.model = model,
    this.color = color,
    this.getName = function() {
      return this.make + ' ' + this.model;
    }
  }
  let car = new Vehicle('Toyota', 'Corolla', 'Black');
  let car2 = new Vehicle('Honda', 'Civic', 'White');


  /**
  * new Vehicle() 이라는 코드를 작성할 때 js엔진이 실제로 하는일은
  우리의 각 오브젝트에 대해서 Vehicle생성자 함수를 복사하는 일이다.
  */
  // car2.year = '2020' // 이 코드 대신 생성자 함수 자체에 추가하기.
  // 저자: 존재하는 오브젝트에는 가능하지만 생성자 함수에는 추가할 수 없다.

  /**
   * 프로토타입
   * js에서 새로운 함수가 만들어질때마다, js엔진은 기본으로 프로토타입 프로퍼티를 추가한다.
   * 이것을 프로토타입 오브젝트라고 부른다. 
   __proto__ 를 갖고있다. (dunder proto: 변수 양 끝이 __로 묶여있음)
   */

   Vehicle.prototype.year = '2021';
