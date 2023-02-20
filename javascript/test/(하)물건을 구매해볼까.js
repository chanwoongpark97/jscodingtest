// ## 하. 물건을 구매해볼까?

// 르탄이가 1000원을 가지고 편의점에서 물건을 사려고 한다. 
// 편의점에는 500원, 100원, 50원, 10원이 충분히 있고, 편의점 직원은 언제나 거스름돈 개수가 가장 적게 잔돈을 준다. 
// 르탄이가 편의점에서 물건을 사고 1000원 지폐 한 장을 냈을 때, 받을 잔돈의 개수를 구하는 프로그램을 작성하여라. 
// (단, 물건의 가격은 10원 이상 1000원 미만이며, 1원 단위는 고려하지 않는다.)

function solution(num){
	let answer= 0; // 거스름돈 개수 구하는 변수 선언
    getPrice = 1000 - num; // 거슬러야 하는 총 금액 선언
    // 받아야 할 동전의 개수를 남은 금액을 비교하며 계산
    if (getPrice >= 500) {
        getPrice = getPrice - 500
        answer += 1;    
    }
    if (getPrice >= 400) {
        getPrice = getPrice - 100
        answer += 1;
    }
    if (getPrice >= 300) {
        getPrice = getPrice - 100
        answer += 1;
    }
    if (getPrice >= 200) {
        getPrice = getPrice - 100
        answer += 1;
    }
    if (getPrice >= 100) {
        getPrice = getPrice - 100
        answer += 1;
    }
    if (getPrice >= 50) {
        getPrice = getPrice - 50
        answer += 1;
    }
    if (getPrice >= 40) {
        getPrice = getPrice - 10
        answer += 1;
    }
    if (getPrice >= 30) {
        getPrice = getPrice - 10
        answer += 1;
    }
    if (getPrice >= 20) {
        getPrice = getPrice - 10
        answer += 1;
    }
    if (getPrice >= 10) {
        getPrice = getPrice - 10
        answer += 1;
    }
	return answer; // answer 반환, 거스름 주는 동전 총 개수
}
let num1 = 160;
console.log(solution(num1)) // 8
// let num2 = 900;
// let num3 = 550;
// let num4 = 320;
// console.log(solution(num2)) // 1
// console.log(solution(num3)) // 5
// console.log(solution(num4)) // 6