/**
 * setTimeOut: 브라우저와 nodeJs 개념. 시간이 흐룬후에 메시지큐에 붙여줌
 */

 setTimeout(() => console.log('HI'), 1000);
 setTimeout(console.log, 1000, 'hi2');

 const bye = setTimeout(console.log, 10000, 'bye');

 console.log(bye); // 3 (id)
  clearTimeout(bye); // 사용하지 않을 때

/**
* setInterval: 정해진 시간마다 함수를 실행
* interval이 1초보다 짧다면 크롬에서는 1초로 맞춰서 실행
*/

const intTest = setInterval(console.log, 2000, 'intTest');

// 인터벌 츼소
clearInterval(intTest);

/**
 * request animation frame:
 * 브라우저가 업데이트 할때마다 리퀘스트 애니메이션 프레임을 요청한다.
 */

const sayhey = ()=> {
  console.log('request ani frame!');
  requestAnimationFrame(sayhey);
};

// requestAnimationFrame(sayhey); // 빠르게 sayhey를 실행한다.