function solution(s){
    let p = 0, y = 0;
    s = s.toLowerCase(); // 소문자로 통합
  
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'p') {
            p += 1; // 문자열 p의 개수
        } else if (s[i] === 'y') {
            y += 1; // 문자열 y의 개수
        }
    }
    return p === y ? true : false // 삼항 연산자로 판별
}