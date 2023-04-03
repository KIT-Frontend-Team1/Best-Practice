//1번
//함수의 이름은 maxValue입니다.
//배열을 파라미터로 전달받는 데, 배열로 받은 가장 큰 숫자와
//배열을 내림차순으로 정렬한 것을 객체안에 넣어 반환하세요 

//풀이과정 1
function maxValue(arr) {
    let sort = arr.sort((a, b) => b - a); //내림차순으로 정렬
    let max = sort[0]; //내림차순에서 가장 첫 숫자(최대값)을 maxValue에 넣기
    return {
        maxValue: max,
        sortArr: sort,
      };
}
console.log(maxValue([1,2,3,4,5]));


//풀이과정 2
function maxvalue(intNum) {
    let maxValue = Math.max(...intNum); // 최댓값 구하기(스프레드)
    let sortArr = intNum.sort((a, b) => b - a); // 내림차순 정렬로 [ 5, 4, 3, 2, 1 ] 
    // 객체 안에 변수를 프로퍼티 키로 넣어 {키: 값}을 리턴
    return { maxValue, sortArr };
}

//풀이과정 3
const obj = {}; //return할 객체
function maxvalue(arr){
    obj['maxValue'] = Math.max(...arr);
    arr.sort((a,b)=>b-a);
    obj['sortArr'] = arr;
    return obj;
}

