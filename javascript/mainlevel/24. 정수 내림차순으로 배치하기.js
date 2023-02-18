function solution(n) {
    var answer = '';
    n = String(n); // 숫자를 문자로 변환
    n = n.split(''); // 문자열을 배열로 변경
    n.sort(function (a, b) {
        if (a > b) return -1; 
  }); //내림차순으로 정렬
    for (let i = 0; i < n.length; i++) {
        answer += n[i];
        answer = parseInt(answer); // 문자열을 숫자로 변환
    }
    return answer;
}