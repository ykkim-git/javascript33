/**
 * 1. 상속
 */

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

let animal = new Animal("My animal");

/**
 * class 확장 방법: class Child extends Parent
 */
class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }


  /**
   * 다형성: 미리 만들어둔 기능을 필요에따라 바꿔 사용하는 것
   Rabbit에서도 stop을 재선언
   */
  stop() { // override
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!
rabbit.stop();
/**
 * rabbit에서 run 메서드는 없지만 
 상속된 프로토타입의 Rabbit.prototype으로 찾아가 run메서드를 찾지만 hide밖에 없는데
 Rabbit이 상속받은 Animal.prototype의 run()메서드를 찾아서 사용할 수 있게된다.
 */
