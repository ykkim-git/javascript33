
/**
 * 값(value) vs 참조(reference)
 * 값에 의한 전달이 일어나는 데이터타입:
 * boolean, null, undefined, string, number
 * 
 * 참조에 의한 전달이 일어나는 데이터타입:
 * Array, function, Object(모두 객체로 볼 수 있다)
 */

// console.log([10] === [10]);
// console.log({ 'a': 20 } === { 'a': 20 });

/**
 * value
 */
let aa = 50;
let bb = aa; // 값 복사

aa = 10;

console.log(bb); // a를 바꿔도 50
// this is copy of value

/**
 * reference
 */
const sexy = ['kimchi', 'potato'];
const pretty = sexy; // referening 
// sexy의 값이 배열이 아니라 sexy는 해당 배열을 참조하고있음.
// '배열은 둥둥 떠있고' sexy는 배열을 가리키고 있다 sexy is pointing to array.

// 배열을 업데이트하면
// preetty, sexy도 마찬가지로 업데이트 된 배열출력

sexy.push('hello');
pretty.push('lalalalal');

console.log(sexy); // ['kimchi', 'potato', 'hello', 'lalalal'];
console.log(pretty); // ['kimchi', 'potato', 'hello', 'lalalal'];

/////////////

console.log([10] === [10]);
// 이 둘은 각각 메모리에 위치한 각기 다른 오브젝트다.

const x = {
  a: 'hello'
}
const b = x;
b.a = 'alalalalala';

console.log(x);