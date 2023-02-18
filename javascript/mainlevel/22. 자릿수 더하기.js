function solution(n) {
    var answer = 0;
    let number = n.toString(); // 숫자를 문자열로 전환
    
    for (let i = 0; i < number.length; i++) {
        answer += parseInt(number[i]); // 문자열을 숫자로 전환

    }
    
    
    return answer;
}