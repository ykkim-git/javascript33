'use strict';

/**
 * 1. this - 누가 호출했는지 잘 봐야함
 */
 
 // 일반 함수 실행 방식
//  function foo() {
//    console.log(this);
//  }
//  foo();
 // 여기서는 this를 호출한것은 window

 // 코드를 풀어보자면
//  (window).foo(); 이다.

/**
 * 
 let age = 100;
 
 function foo () {
   let age = 99;
   bar(age)
  }
  
  function bar () {
    console.log(this.age);
  }
  foo();

 * 맨 밑에서 (window).funcOne()가 먼저 호출되었고
 funcOne() 함수에서 funcTwo(age)가 호출되었다.

 이 경우에 this를 호출한건 funcTwo(age)이다.
 정확하게는 (window).funcTwo(age)가 this를 호출한 것
 그렇기 때문에 100이 나온다.
 */


 ////////////////////////////////

 // 도트 표기법
 /**
  let age = 100;
  let ken = {
    age: 35,
    foo: function () {
      console.log(this.age);
    }
  }
  ken.foo();

  여기서는 ken.foo()에서 this를 호출했다. 따라서 age는 35가 출력됨.

  누가 호출했는지 보려면 . 앞에 누가 있는지를 보면 알 수 있다.
 

 function foo() {
   console.log(this.age);
  }
  let age = 100;
  
  let ken = {
    age: 36,
    foo: foo
  }
  let wan = {
    age: 32,
    foo: foo
  }
  
  ken.foo(); // 36
  wan.foo(); // 32
  
  let fn = ken.foo
  fn(); // 100
  
   foo() 함수에서 this는 밑의 코드에서 각각 다른 방법으로 호출되었기 때문에
   ken.foo()는 this가 ken을 가리키므로 36
   wan.foo()는 this가 wan을 가리키므로 32
   그리고 변수 fn은 ken 객체의 foo함수를 할당했지만 (window).fn()으로
   호출했기 때문에 age는 100이 출력된다.
   */
  


   /**
    * 명백한 바인딩 / call & bind & apply
      thi처럼 호출하는 상대가 누군지에따라 가리키는게 달라지지만
      call, bind, apply는 이것을 무시하고 가리키고 싶은 상대를 확실하게 가리킨다.
      call bind apply는 함수의 Web API 메서드이다.
    */

    // a. call
    let age = 100;
    function foo() {
      console.log(this.age);
    }
    let ken = {
      age: 35,
      log: foo
    }
    foo.call(ken, 1, 2, 3);
    // foo함수는 첫번째 인자로 지정한 ken객체를 가리킨다.



    /**
     Product.call에서 바인딩으로 this를 지정함.
     Food함수의 this는 아래의 cheese, fun이라는 변수가 호춣함.
    */
    function Product(name, price) {
      this.name = name;
      this.price = price;
    }
    
    function Food(name, price) {
      Product.call(this, name, price);
      this.category = 'food';
    }
    
    function Toy(name, price) {
      Product.call(this, name, price);
      this.category = 'toy';
    }
    
    const cheese = new Food('feta', 5);
    const fun = new Toy('robot', 40); 

    console.log(cheese);
    console.log(fun);



// 2. bind

var obj = {
  string: 'zero',
  yell: function() {
    console.log(this.string);
  }
};

var obj2 = {
  string: 'what?'
};

var yell2 = obj.yell.bind(obj2);
yell2(); // 'what?'

// 보는 바와 같이 obj.yell의 함수의 this는 obj2 객체를 가리키게 bind해줬습니다.
// yell()로 호출해줘야 what이 출력되게 되는 것 입니다.
// 즉, call(this, 1, 2, 3)은 bind(this)(1, 2, 3)과 같습니다.




// 3. apply

let age2 = 100;

function foo() {
  console.log(this.age2);
}

let ken2 = {
  age: 35,
  log: foo
}

foo.apply(ken, [1, 2, 3]);

// apply는 call과 조금 다릅니다.
// 단지 배열을 인자로 넣을 수 있습니다.


// 4. new키워드를 사용한 함수 실행
function FooNew () {
  console.log(this.age); // undefined
  this.age = 100; // 빈 객체에 속성 추가
  console.log(this.age); // 100
}

new FooNew();

// new 생성자는 FooNew()함수를 통해 하나의 새로운 빈 객체를 생성한다
// 이 빈 객체가 this를 호출하며 this가 빈 객체를 가리킨다.
// 빈 객체라서 첫줄에 age가 undefined로 나오지만 age를 추가하면 100이 나온다.

function Person() {
  this.name = 'park chan ho';
  console.log(this);
}
var park = new Person();
console.log(park);

// this가 park이라는 변수를 호출하며
// park은 새로운 객체가 할당된다.