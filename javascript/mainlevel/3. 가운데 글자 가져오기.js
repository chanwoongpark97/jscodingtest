function solution(s) {
    var answer = '';
        if (s.length % 2 === 1) {
            answer = s[(s.length - 1) / 2]; // 홀수 일때 
        } else {
            answer = s[s.length / 2 - 1] + s[s.length / 2]; // 짝수 일때
        }
        
    return answer;
}