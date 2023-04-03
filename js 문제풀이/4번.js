//4번
//배열을 파라미터로 받는 solution이라는 함수는 각각 배열의 짝수의 개수와 홀수의
//개수를 배열에 넣어 반환합니다.

//풀이과정1

function solution(number_list) {
    return [
        arr.filter(number => number % 2 === 0).length,
         // 배열에서 짝수인 값을 필터한 배열의 길이
        arr.filter(number => number % 2 === 1).length, 
        // 배열에서 홀수인 값을 필터한 배열의 길이
      ]
    }
    
    const arr = [1,2,3,4,5]
    const a = solution(arr)
    console.log(a) // [2, 3]

//풀이과정2
function solution(arr) {
    let odd = 0;
    let even = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        odd++;
      } else {
        even++;
      }
    }
    return [even,odd];
  }

//풀이과정3
const even = [];
const odd = [];
function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  return [even.length, odd.length];
}

console.log(solution([1, 2, 3, 4, 6]));


//풀이과정4
function oddEven(arr){
    let answer = [0,0];
    for(let i = 0 ; i < arr.length ; i++){
        (arr[i] % 2 === 0 ) ? answer[0] += 1 :
        answer[1] += 1;
    }
    return answer;
}
const arr1 = [1,2,3,4,5,6,7,8,9,10,11];
console.log(oddEven(arr1));




