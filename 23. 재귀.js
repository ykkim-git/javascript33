
/**
 * 재귀: 함수가 자기 자신을 호출하는 것
 */

 function factorial (x) {
   if (x < 0) return;
   if (x === 0 ) return 1;
   return x * factorial (x-1);
 }
 console.log(factorial(3)); //6