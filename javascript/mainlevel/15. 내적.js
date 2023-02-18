function solution(a, b) {
    var answer = 0;
    for (let i = 0; i < a.length; i++) {
        answer += a[i]*b[i] // 두 배열의 같은 위치의 합
    }
    return answer;
}