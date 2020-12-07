/**
 * 고차함수
 */

 const characters = [
  {name: 'Han Solo'},
  {name: 'Luke SkyWalker'},
  {name: 'Leia Organa'}
];

// es6 map()
const names = characters.map(character => character.name);
console.log(names); // ["Han Solo", "Luke SkyWalker", "Leia Organa"]
console.log()

// es5 map()
var names2 = characters.map(function(character) {
  return character.name + '!';
})

console.log(names2); // ["Han Solo!", "Luke SkyWalker!", "Leia Organa!"]

/**
 * map 메소드가 다른 함수를 매개 변수로 사용하는 '콜백함수'
 이것이 고차함수다. 
 '함수 파라미터로 함수를 넣고 이 과정을 반복하는것'
 */