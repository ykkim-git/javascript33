/**
 * 1. 버블정렬 O(n^2)
 */

var bubbleSort = function (array) {
  var length = array.length;
  var i, j, temp;
  for (i = 0; i < length - 1; i++) {
    // 순차적으로 비교하기 위한 반복문
    for (j = 0; j < length - 1 - i; j++) {
      // 끝까지 돌았을 때 다시 처음부터 비교하기 위한 반복문
      if (array[j] > array[j + 1]) {
        // 두 수를 비교하여 앞 수가 뒷 수보다 크면
        temp = array[j]; // 두 수를 서로 바꿔준다
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

bubbleSort([5, 1, 7, 4, 6, 3, 2, 8]);

/**
 * 2. 선택 정렬  O(n^2)
 배열의 시작 부분에서 첫번째 요소를 나머지 요소와 비교하고
 모든 요소를 검사한 후 가장 작은 요소가 배열의 첫번째 위치에 배치되는 과정을 
 모든 데이터가 정렬 될 때까지 반복한다.
 */

var selectionSort = function (array) {
  var length = array.length;
  var minIndex, temp, i, j;
  for (i = 0; i < length - 1; i++) {
    // 처음부터 훑으면서
    minIndex = i;
    for (j = i + 1; j < length; j++) {
      // 최솟값의 위치를 찾음
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    temp = array[minIndex]; // 최솟값을 저장
    array[minIndex] = array[i];
    array[i] = temp; // 최솟값을 제일 앞으로 보냄
  }
  return array;
};

selectionSort([5, 1, 4, 7, 2, 6, 8, 3]); // [1,2,3,4,5,6,7,8]

/**
 * 3. 빠른 정렬 (quick index)
 가장 빠른 정렬 알고리즘 중 하나. 
 데이터 목록을 반복적으로 더 작은 요소와 더 큰 요소로 구성된 더 작은 하위 목록으로 나누는
 분할 및 정복 알고리즘이다. 목록의 한 요소를 피벗으로 선택하여 목록을 하위목록으로 나눈다.
 데이터는 피벗보다 작은 요소를 맨 아래로 이동하고 피벗보다 큰 요소를 맨 위로 이동하여
 피벗을 중심으로 정렬한다.
 */

var partition = function (array, left, right, pivotIndex) {
  // 정렬하는 부분
  var temp;
  var pivot = array[pivotIndex];
  while (left <= right) {
    // 왼쪽, 오른쪽 수를 규칙과 비교해 다음 수로 넘어갑니다.
    while (array[left] < pivot) left++;
    while (array[right] > pivot) right--;
    if (left <= right) {
      // 왼쪽이 기준보다 크고, 오른쪽이 기준보다 작으면
      temp = array[left];
      array[left] = array[right];
      array[right] = temp; // 서로 바꿔줍니다.
      left++;
      right--;
    }
  }
  temp = array[left];
  array[left] = array[pivotIndex];
  array[pivotIndex] = temp; // 마지막으로 기준과 만난 수를 바꿔줍니다. 기준의 위치는 이제 i입니다.
  return left;
};

var quickSort = function (array, left, right) {
  // 재귀하는 부분
  if (!left) left = 0;
  if (!right) right = array.length - 1;
  var pivotIndex = right; // 배열 가장 오른쪽의 수를 기준으로 뽑습니다.
  pivotIndex = partition(array, left, right - 1, pivotIndex); // right - 1을 하는 이유는 기준(현재 right)을 제외하고 정렬하기 위함입니다.
  if (left < pivotIndex - 1) quickSort(array, left, pivotIndex - 1); // 기준 왼쪽 부분 재귀
  if (pivotIndex + 1 < right) quickSort(array, pivotIndex + 1, right); // 기준 오른쪽 부분 재귀
  return array;
};

quickSort([4, 1, 7, 6, 3, 8, 2, 5]); // [1,2,3,4,5,6,7,8]

/**
 * 4. 병합 정렬 Divide and Conquer 알고리즘
 입력 배열을 두 개로 나누고 두개의 절반을 자신을 호출 한 다음 두개의 정렬 된 절반을 병합한다.
 merge()함수는 두 반쪽을 병합하는데 사용된다. 

 merge (arr, l, m, r)는 arr [l..m] 및 arr [m + 1..r]이 
 정렬되어 두 개의 정렬 된 하위 배열을 하나로 병합한다고 가정하는 핵심 프로세스다.
 */

/**
  * ES6를 사용한 검색 알고리즘
  1. 순차검색
  첫 번째 요소에서 시작하여 찾고있는 데이터를 찾거나
  목록의 끝에 도달 할 때까지 목록의 각 요소로 이동하는 것.

  2. 이진 검색
  하나의 가능한 항목으로 좁힐 때까지 항목을 포함 할 수 있는 목록의 부분을
  반복해서 절반으로 나누는 것

  3. 텍스트 데이터 검색
  각 단어 사이의 공백을 구분기호로 사용하는 split() 함수를 사용하여
  텍스트를 단어로 분할한다. 

  4. 이진 검색 & 트리 검색
  더 낮은 값은 항상 왼쪽 자식 노드에 저장되기 때문에 
  BST에서 최소값을 찾으려면 마지막 노드에 도달 할 때까지 
  BST의 왼쪽 가장자리 만 통과하면된다.

  BST에 저장된 최대 값을 찾으려면 함수가 BST의 오른쪽 끝에 도달 할 때까지 
  노드의 오른쪽 링크를 통과해야한다.. 이 노드에 저장된 값은 최대 값이어야한다.

  BST에서 특정 값을 검색하려면 현재 노드에 저장된 데이터와 
  검색중인 값을 비교해야한다. 비교는 검색이 왼쪽 자식 노드로 이동하는지
   또는 현재 노드가 검색된 값을 저장하지 않는 경우 
   오른쪽 자식 노드로 이동하는지 여부를 결정한다.
  */
