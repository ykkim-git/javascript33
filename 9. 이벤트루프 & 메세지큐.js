/**
 * javascript는 none blocking 언어이다.
 * ex: alert은 blocking function이다. (아무것도 할 수 없음)/
 */

 setTimeout(()=> {
  console.log('hi');
 }, 0);
 console.log('bye');

 // bye -> hi
 
 /**
  * 1. 스택에 setTimeout과 console.log(bye)가 들어간다.
  * 2. js는 setTimeout을 Web Api(브라우져)로 가져간다.
  * 3. 스택에 있던 console.log('bye')를 실행시킨다.
  * 4. web api(브라우져)에서 타임아웃의 두번째 인자를 확인한다.
  * 5. 0초를 기다리고 그 함수(console.log('hi'))는 메세지큐로 간다.
  * 6. 만약 스택에 아무것도 없다면 js는 큐를 보고(console.log('hi')) 스택으로 간다.
  * 7. console.log('hi')를 스택에서 실행시키고 끝난다.
  */

  