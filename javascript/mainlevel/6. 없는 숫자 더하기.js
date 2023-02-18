function solution(numbers) {
    var answer = 0;
    for (let i = 0; i <= 9; i++) {
        if (!(numbers.includes(i))) // numbers 함수를 활용, !를 사용해서 없는 숫자만 입력
        answer += i;
    }
    return answer;    
}