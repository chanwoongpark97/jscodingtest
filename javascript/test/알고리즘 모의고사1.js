// 기원이는 오늘 항해99를 시작했다. 성격이 급한 기원이는 항해 1일 차부터 언제 수료를 하게될 지 궁금하다.
// 항해 1일 차 날짜를 입력하면 98일 이후 항해를 수료하게 되는 날짜를 계산해주는 알고리즘을 만들어보자.

// ### 제한 조건

// - 1 ≤ month ≤ 12
// - 1 ≤ day ≤ 31 (2월은 28일로 고정합니다, 즉 윤일은 고려하지 않습니다.)

// 입출력 예
// month day result
// 11    27  "3월 5일"
// 6     22  "9월 28일"

// 지정 입력값
// month day result
// 1     18  "4월 26일"

function solution(month, day){
	let date = new Date(2022, month - 1, day + 98); // 98일 후 날짜 변수 생성 (2023으로 하면 2024넘어갈때 윤년이 생겨서 성립 불가능)
	let newMonth = date.getMonth() + 1; // 월 구하는 변수 생성
	let newDay = date.getDate(); // 일 구하는 변수 생성
	  return newMonth + "월" + newDay + "일"; // 날짜 반환
  }
console.log(solution(1,18)) // 1월 18일 < 4월 26일 
// console.log(solution(11,27)) // 11월 27일 < 3월 5일
// console.log(solution(6,22)) // 6월 22일 < 9월 28일