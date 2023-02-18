function solution(n) {
    var answer = [];
    var arr = String(n) // 숫자를 문자열로 변환
    arr = arr.split(''); // 각 문자마다 배열로 변경
    arr = arr.reverse(); // 배열을 뒤집기

    for (let i = 0 ; i < arr.length; i++) {
        answer.push(Number(arr[i])); // arr 배열 문자를 하나씩 넣으면서 숫자로 변환
    }
    return answer;
}