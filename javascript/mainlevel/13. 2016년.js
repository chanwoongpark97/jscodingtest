function solution(a, b) {
    var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']; // 배열로 요일 정의
    var dayOfWeek = week[new Date(2016, a-1, b).getDay()]; // Date 함수 공식을 이용
    // a-1하는 이유는 월은, 0~11까지 로 나타내기 때문에 1을 감소해야 정확한 값이 뜬다.
    return dayOfWeek;
}