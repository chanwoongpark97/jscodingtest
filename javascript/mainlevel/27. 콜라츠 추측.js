function solution(num) {
    if (num === 1) {
        return 0; 
    } // 값이 1이면 그대로 0 출력

    for(let i = 0; i <= 500; i++){
        if (num === 1) {
            return i;
            break; // for문을 돌려 값이 1이 나오면 i값을 출력하고 break
        } else if (i === 500) {
            return -1; // i가 500이면 -1로 반환
        } else if (num % 2 === 0) {
            num = num / 2 // num이 짝수면 2로 나누기
        } else {
            num = num * 3 + 1 // num이 홀수면 3을 곱하고 1을 더함
        }
    }
}