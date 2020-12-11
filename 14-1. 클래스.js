/**
 * 객체지향 프로그래밍에서 특정 객체를 생성하기 위해 변수와 메소드를 정의하는 틀로,
 객체를 정의하기 위한 상태와 메서드로 구성된다.
 */

// 기본문법
class MyClass {
  // 여러메서드 정의가능
  constructor() {}
  method1() {}
  method2() {}
}

/**
  * 클래스를 만들고 new MyClass()를 호출하면 내부에서 정의한 메서드가 들어있는 객체를 생성
  객체의 기본상태를 설정해주는 생성자 constructor()는 new에 의해 자동호출되므로
  특별한 절차없이 객체를 초기화 할 수 있다.
  */

class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}

// 사용법
let user = new User("John");
user.sayHi(); // john
console.log(typeof User); // function

/**
 1. new User('John')를 호출
 2. 새로운 객체 생성
 3. 넘겨받은 인수와 함께 constructor 자동실행
 4. 파라미터 'John'이 this.name에 할당
 */


 
/**
 * getter & setter
 */

class UserGetSet {
  constructor(name) {
    // setter 활성화
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 3) {
      console.log("이름이 짧습니다.");
      return;
    }
    this._name = value;
  }
}
let getsetUser = new UserGetSet("Jo"); //이름이 짧습니다.
console.log(UserGetSet.prototype);
// UserGetSet.prototpye 에 getter & setter가 만들어져서 get과 set이 사용가능
