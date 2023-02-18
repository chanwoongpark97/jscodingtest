function solution(s) {
    let answer = '';
    let words = s.split(' '); // 공백을 기준으로 단어 쪼개기
    // 이중 for문을 활용
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if(j % 2 === 0) {
                answer += words[i][j].toUpperCase(); // 짝수번째에 대문자 표현
            } else {
                answer += words[i][j].toLowerCase(); // 홀수번째에 소문자 표현
            }
        }
        // 각 단어가 끝났을 때 공백칸 출력
        if (i < words.length - 1) {
            answer += ' ';
        }
    }
    return answer;
}