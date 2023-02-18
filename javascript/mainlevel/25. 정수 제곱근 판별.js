function solution(n) {
    var answer = 0;
    let sqrt = Math.sqrt(n); // n의 제곱근을 나타내는 sqrt 함수
    // 1로 나눠서 나머지가 0일때 -> 정수인지 아닌지 판별
    if (sqrt % 1 === 0) {
        answer = (sqrt + 1) * (sqrt + 1); // 정수면 x+1을 더하고 제곱
    } else {
        answer = -1; // 정수 아니면 -1로 리턴
    }
    return answer;
}