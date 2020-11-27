// statement (not return) 그냥 명령임. 
// ex : if, else, else if, for, while ....
// const thing = if(true) {

// } // error

/**
 * function declaration 함수 선언식
 */

 const awesome = add(1, 5);
 function add(a, b) {
   return a + b;
 }

 console.log(awesome); // 6

 /**
  * function expression 
  */
const add2 = (a, b) => {
  return a + b;
}
const awesome2 = add2(30, 40); // 70
console.log(awesome2);