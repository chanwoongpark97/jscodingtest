function solution(arr, divisor) {
    var answer = []
    // 나누어 떨어진 숫자만 배열 추가
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) {
            answer.push(arr[i]);
        }
    }
    // 오름 차순 정렬, for문 밖으로 실행해야 정상 출력됨
    answer.sort(function(a, b) {return a - b}); 
    // 나눌 숫자가 없어 길이 값이 0이면 -1을 추가
    if (answer.length === 0) {
        answer.push(-1);
    } 
    return answer;
}