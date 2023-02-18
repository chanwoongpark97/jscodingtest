function solution(arr) {
    var answer = 0;
    for (let i = 0; i < arr.length; i++ ) { // arr 안에 있는 배열 총 개수 정의
        answer += arr[i] / arr.length; // 평균 = arr 안에 배열의 있는 합계 / 배열 개수
    }
    return answer
}