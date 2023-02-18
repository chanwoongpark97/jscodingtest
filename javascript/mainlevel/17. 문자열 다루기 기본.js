function solution(s) {
    let answer = parseInt(s); // 문자열을 숫자로 변환
  	// 길이가 4 혹은 6이면서, 숫자여야 하는 조건식
    if ((s.length === 4 || s.length === 6) && s == answer) {
        answer = true;
    } else {
        answer = false;
    }
    return answer;
}