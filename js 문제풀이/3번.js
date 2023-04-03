//3번 
// //파라미터로 전달받은 배열의 요소마다 각 10을 더합니다. 그리고 나머지 파라미터로 
// //받은 정수가 있는지 확인해서 있으면 새로운 배열에서 그 숫자를 제외하고, 없다면
// //검사한 값이 없다는 로그를 보인후 종료하는 함수를 만드세요

//풀이과정1
function checkNum(arr,num){
    let newArr = arr.map(e=>e+=10);
    return ((newArr.includes(num))?
    newArr.filter(e => e!==num) :
    '결과값이 없습니다');
}
const arr1 = [1,2,3,4,5];
const b = checkNum(arr1,11);
console.log(b);

//풀이과정2
function findValues(arr, target) { 
    const result = arr.map((num) => num + 10).filter((num) => num !== target);
    return result.length === arr.length ? "결과값이 없습니다" : result;
  }
const arr = [1, 2, 3, 4, 5];
console.log(findValues(arr, 20));

//풀이과정3
function check(arr, number) {
    const resultArr = arr.map((n) => n + 10);
    if (!resultArr.includes(number)) {
      return '결과값이 없습니다. (값 없음)';
      //number가 포함되어 있으면 splice로 삭제
    } else {
      const index = resultArr.indexOf(number);
      resultArr.splice(index, 1);
      return resultArr;
    }
  }
  
  console.log(check([1, 2, 3], 11));

