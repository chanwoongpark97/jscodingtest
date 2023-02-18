function solution(price, money, count) {
    var answer = 0;
    var result = 0;
    result = money - (count * (price + price * count) / 2); // 등차수열 이용
    if (result >= 0) {
        answer = 0; 
    } else {
        answer = -result;
    }
    return answer;
}