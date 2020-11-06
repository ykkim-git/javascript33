/**
 * 원시 데이터 타입(Primitive Type): 객체가 아닌 것들이며 값 그 자체임.
 * Boolean
 * null
 * undefined
 * number
 * string
 * NaN
 * symbol (es6)
 */

 // Primitive Types
true instanceof Object; // false -> boolean
null instanceof Object; // false -> null
undefined instanceof Object; // false -> undefined
0 instanceof Object; // false -> number
'bar' instanceof Object // false -> string

// Non-primitive types
// const foo = function () {}
// foo instanceof Object; // true -> function;

/**
 * 원시타입에는 어떠한 메소드도 붙지 않는다.
 * 변하지 않는 immutable 속성을 갖는다.  Primitive types are immutable
 * 변수에 원시 타입을 재할당 가능하지만 변수에 할당된 원시타입의 값이 바뀌는 것이 아니라
 * 새로운 원시타입의 값이 들어간다. 원시타입 값 자체는 바뀔 수 없다. 

 * 원시 타입은 참조(reference)로 저장되는 Object와 다르게 값 그 자체로 저장되어 있습니다.
 * 값이 동일한지 체크할 때 앞의 문장이 정확히 무슨 의미인지 알 수 있습니다. 
 * 아래 배열과 객체는 내용은 같지만 다른 곳을 참조하고 있기 때문에 false를 리턴합니다.
  
  "dog" === "dog"; // true 
  14 === 14; // true

  {} === {}; // false
  [] === []; // false
  (function () {}) === (function () {}); // false

 */

/**
 * 함수: 특별한 프로퍼티들을 가진 새로운 형태의 객체

  const foo = function (baz) {};
  console.log(foo.name); // foo 
  console.log(foo.length); // 1

  // 일반적인 객체와 같이 함수에 새로운 프로퍼티 추가 가능
  foo.bar = 'baz';
  foo.bar // baz

 */

/**
 * 생성자 함수: 리턴 값으로 생성하는 함수를 객체 그 자체로서 반환하는 함수
  
    const Foo = function() {};
    const bar = new Foo();
    bar; // {}
    bar instanceof Foo; // true
    bar instanceof Object // true

  * 생성자 함수는 object를 리턴한다. 
  * Object에 새로운 프로퍼티들을 할당하기 위해 this를 함수의 몸통안에서 사용 가능

  const Foo = function() {
    this.bar = 'baz';
  };

  const qux = new Foo();
  qux; // { bar: 'baz' };
  qux instanceof Foo; // true
  qux instanceof Object; // true

 */
const Foo = function() {
  this.bar = 'baz';
};

const qux = new Foo();
qux; // { bar: 'baz' };

console.log(Foo);
console.log(qux);

qux instanceof Foo; // true
qux instanceof Object; // true

/**
 * 래퍼 오브젝트
 * String, Number, Boolean, function와 같은 원시타입을 new 키워드로 생성하면
 * 원시타입에 대한 래퍼 오브ㅔㅈㄱ트가 생성된다.
 */

// string은 문자열이 인자로 들어왔을 때 원시문자열(Primitive String)을 
// 생성하는 전역 함수이다. String은 인자로 들어온 값을 문자열로 바꾸려한다.

String(1337); // '1337'
String(true); // 'true'
String(null); // 'null
String(undefined); // 'undefined'
String(); // ''
String('dog') === 'dog'; // 'true'
typeof String('dog') // 'string'

// 위 코드에서 new 코드를 붙인다면 String은 여전히 생성자 함수로도 쓰일 수 있다.
// const pet = new String('dog');
// typeof pet; // 'object';
// pet === 'dog'; // false;
// console.log(pet);
/** 
{
  0: "d"
  1: "o"
  2: "g"
  length: 3
}
*/


/**
 * 오토박싱: 원시 탕비 문자열 생성자와 일반 오브젝트 생성자 둘 다 
 * string함수를 이용한다. 원시 문자열 타입에서 .constructor를 이용하여
 * 생성자 프로퍼티를 확인할 수 있다.
 */
const pet = new String('dog');
pet.constructor === String; // true
String('dob').constructor === String;

/**
 * 요약
1. 자바스크립트의 모든 것이 Object(객체)인 것은 아니다.
2. 자바스크립트에는 6개의 원시 타입이 존재한다.
3. 원시 타입이 아닌 것들은 모두 Object(객체)이다.
4. 함수는 단순히 특별한 타입의 Object(객체)일 뿐이다.
5. 함수는 새로운 Object(객체)를 만들기 위해 사용될 수 있다. (생성자 함수)
6. Strings, Booleans, Numbers 는 원시 타입이면서 오브젝트이다. (래퍼 오브젝트를 갖는다.)
7. 자바스크립트 내부에 존재하는 오토박싱(Autoboxing)이라는 기능 때문에 
몇몇 원시 타입들 (Strings, Numbers, Booleans) 는 Object(객체)처럼 동작한다.
 */