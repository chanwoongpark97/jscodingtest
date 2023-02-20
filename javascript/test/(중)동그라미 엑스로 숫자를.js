// ## 중. 동그라미 엑스로 숫자를?

// "OOXXOXXOOO"와 같은 OX문의 결과가 있다. O는 문제를 맞은 것이고, X는 문제를 틀린 것이다. 
// 문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다. 예를 들어, 10번 문제의 점수는 3이 된다.

// "OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.

// OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.

// (단,  OX문의 결과는 0보다 크고 80보다 작은 문자열이 주어진다. 또한 문자열은 O와 X만으로 이루어져 있다.)

function solution(str){
	let answer= 0; // 최종 점수 변수 선언
    let comboCorrect = 0; // 문제 연속 정답 점수 변수 선언
    // 각 인덱스 마다 분석
    for (let i = 0; i < str.length; i++) {
        // 정답일때는 comboCorrect 1점씩 올려주고 최종점수 반영
        // 오답이면 연속 정답 점수 변수는 0으로 변경
        if (str[i] === 'O') {
            comboCorrect += 1;
            answer = answer + comboCorrect;
        } else {
            comboCorrect = 0;
        }
        
    }
	return answer; // 최종 점수 반환
}
let str="OXOOOXXXOXOOXOOOOOXO";
console.log(solution(str)) // 27
// let str2= "OOXXOXXOOO"
// let str3= "OXOXOXOXOXOXOX"
// let str4= "OOOOOOOOOO"
// console.log(solution(str2)) // 10
// console.log(solution(str3)) // 7
// console.log(solution(str4)) // 55