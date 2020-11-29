/**
 * IIFE (Immediately Invoked Function Expressions) : 즉시 호출 함수 표현식
 */

 // 기본형태
 (function() {
  console.log('IIFE BASIC!')
 })();


/**
 * 언제 사용하는지?: 변수를 전역으로 선언하는것을 피하기 위해서
 */

 function showName(firstName, lastName) {
  var nameIntro = "Your name is ";
  // 이 내부 함수는 외부함수의 변수뿐만 아니라 파라미터 까지 사용할 수 있습니다.
  function makeFullName() {
      return console.log(nameIntro + firstName + " " + lastName);
  }
  return makeFullName();
}
  showName("Michael", "Jackson"); // Your name is Michael Jackson