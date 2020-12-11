/**
 * new 생성자: 객체를 만들 때 사용
 함수를 new와 생성자를 사용해 호출하지 않고 그냥 함수로 호출할 경우 함수 안에서 this는 항상 전역 객체를 가리킨다.₩
 */

 // 틀
 function Student(name, age) {
   this.name = name;
   this.age = age;
 }

 // 객체 생성
 const student1 = new Student('홍길동', 20);

 /**
  * typeOf vs instanceOf

  typeof: primitive(원시형(기본)) value의 타입을 알고자 할 때 사용한다.

  instanceOf: 객체/함수/배열과 같은 reference type(참조형)의 타입을 알고자 할 때 사용한다.
  */

