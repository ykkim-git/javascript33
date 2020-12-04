/**
 * Object.create와 Object.assign
 */

 /**
  * 1. Object.create
  기존 개체를 새로 만든 개체의 프로토타입으로 사용하여 새 개체를 만든다.
  */
  const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(person);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // inherited properties can be overwritten
  
  me.printIntroduction();
  // expected output: "My name is Matthew. Am I human? true"
  

  /**
   * person은 __proto__라는 속성을 가지며
   여기서는 Object함수(Web API)를 가리킨다.

   Object.create(프로토타입으로 복사할 것)
   me -> person -> Object 라는 proto chain이 만들어짐
   */

   ///////////////////////////////


   /**
    * 2. Object.assign
    하나 이상의 소스 개체에서 대상 개체로 열거 가능한 모든 속성을 복사한다.
    */

    const target = { 
      a: 1, 
      b: 2
    };
    const source = { 
      b: 4,
      c: 5
    };

    const returnedTarget = Object.assign(target, source);

    console.log(target);
    // expected output: Object { a: 1, b: 4, c: 5 }

    console.log(returnedTarget);
    // expected output: Object { a: 1, b: 4, c: 5 }

    // Object.assign은 source 개체의 모든 속성을 
    // target속성에 뒤짚어 씌우고 target객체를 반환합니다.
    // 따라서 결과는 { a: 1, b: 4, c: 5 }라는 결과가 나옵니다.
