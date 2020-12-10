/**
 * 데이터 구조는 크게 3가지로 구별한다.
 1. Stacks or Queue (항목이 삭제 및 삽입되는 방식만 다른 배열)

 2. Linked List / Trees / Graphs (노드가 다른 노드를 참조하는 방식)

 3. Hash Table(해시 함수에 의존)
 */

 /**
  * 1. Stack
  Push는 배열의 맨 위에 요소를 추가하고 Pop은 동일한 위치에서 요소를 제거한다.
  Last In, First Out 을 따른다.

  * 2. Queue
  unshift와 pop을 사용
  First In, First Out 을 따른다.

  * 3. Linked List
  배열과 마찬가지로 Linked Lists데이터 요소를 순차적으로 저장한다.
  인덱스를 유지하는 대신 다른 요소에대한 포인터를 유지한다.
  노드는 다른 노드를 참조하고 꼬리에 꼬리를 무는 형식이다.

  * 4. Tree
  계층 구조의 많은 하위 노드에대한 참조를 유지한다는 점을 제외하고
  Linked List와 같다. 나무 뿌리와 같이 상위 노드는 하나만 가질 수 있고 하위 노드는 자유롭게 가진다.

  * 5. Graph
  트리가 둘 이상의 부모를 자유롭게 가질 수 있다. 자유도가 높다.

  */