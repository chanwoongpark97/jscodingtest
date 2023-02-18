function solution(participant, completion) {
    let answer = '';
    
    participant.sort(); // 참가자 배열 정렬
    completion.sort(); // 완주자 배열 정렬
    // 두 배열의 i번째와 비교 해서 불일치
    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            answer = participant[i];
            return answer; 
        }
    }
}