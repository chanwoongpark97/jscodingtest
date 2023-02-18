function solution(x) {
    let number = x.toString(); //숫자를 문자열로 변환
    let intPlus = 0; //각 자리수마다 더할 변수 생성
	// 각 자리수마다 모두 더하기
    for (let i = 0; i < number.length; i++) {
        intPlus += parseInt(number[i]); // 문자열을 숫자로 변환
    }
  	// 정수로 나머지가 딱 떨어지는 기준
    if (number % intPlus === 0) {
        return true;
    } else {
        return false;
    }
}