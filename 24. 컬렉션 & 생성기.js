/**
 * 컬렉션: 데이터 구조(데이터를 어떻게 저장할 것인지에 대한 방법)
 */

 /**
  * 1. Map: Object와 비슷한 형태를 가진다.
    key와 value를 가지는데 Map에서는 키가 문자열이 아니어도 사용이 가능하다.
  */

  let map = new Map();

  map.set('1', 'str1'); // string key
  map.set(1, 'num1'); // numeric key
  map.set(true, 'boolean1'); // boolean key

  console.log(map.get(1)); // 'num1'
  console.log(map.get('1'));  // 'str1'
  console.log(map.size); // 3
  console.log('----------------');


  /**
   * 2. Set: value 집합으로 키가 없다. 각 값은 한 번만 발생가능하다.
   */

   let set = new Set();

   let john = { name: 'John' };
   let pete = { name: 'Pete' };
   let mary = { name: 'Mary' };
   
   set.add(john);
   set.add(pete);
   set.add(mary);
   set.add(john);
   set.add(mary);

   console.log(set.size); // 유니크한 value만 유지

   for (let user of set) {
     console.log(user.name); // 'John', 'Pete', 'Mary'
   }