/**
 * 피연산자를 10진수나, 16진수, 8진수로 다루지않고 32개의 비트 집합을 기준으로 연산한다.
 */

 /**
  * 1. 비트 AND / a & b
  * 두 피연산자의 대응되는 비트가 모두 1이면 1을 반환
  */

 console.log(true & true) // 1
 console.log(true & false) // 0
 console.log(false & true) // 0
 console.log(false & false) // 0
 
 /**
  * 2. 비트 OR / a | b
  * 두 피연산자의 대응되는 비트에서 둘 중 하나가 1이거나 모두 1인 경우 1을 return
  */

 console.log(true | true) // 1
 console.log(true | false) // 1
 console.log(false | true) // 1
 console.log(false | false) // 0

 /**
  * 3. 비트 XOR / a ^ b
  * 두 피연산자의 대응되는 비트에서 둘 중 하나가 1이고, 둘 다 1이나 0이 아닐 경우 1을 return
  */

 console.log(true ^ true) // 0
 console.log(true ^ false) // 1
 console.log(false ^ true) // 1
 console.log(false ^ false) // 0

 /**
  * 4. 비트 NOT / ~ a
  * 피연산자의 비트를 뒤집음.
  */

  console.log(~ 5) // - 6
  console.log(~ -6) // 5
