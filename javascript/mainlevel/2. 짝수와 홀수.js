function solution(num) {
    var answer = '';
    if ( num % 2 === 0 ) {
        answer = "Even" // 짝수
    } else {
        answer = "Odd" // 홀수
    }
    return answer;
}