/**
 * Promise: 비동기를 간편하게 처리하도록 도와준다.
 중요 2가지
 1. state
 성공했는지 실패했는지에 대한 상태
 만들어져서 지정한 것을 수행중일 때 pending -> 
 성공적으로 끝나면 fulfilled or 에러 rejected
 
 2. producer <-> consumer 차이점
 */

 // Producer
 const promise = new Promise((resolve, reject) => {
   // doing some heavy works (network, read files 등)
   console.log('doing something...');
 });
 

