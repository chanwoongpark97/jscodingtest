function solution(arr) {
    if(arr.length === 1) return[-1]; // arr 길이가 1이면 [-1]로 반환
    
    let i = 0; // 배열의 첫항 정의
    // 두번째 항부터 끝항까지 순서대로 첫항과 비교해 가작 작은 숫자를 찾기
    for (let j = 1; j < arr.length; j++){
        if (arr[j] < arr[i]) {
            i = j; // 더 작은 숫자가 나오면 i번째 항으로 변경
        }
    }
    arr.splice(i, 1); // 가장 작은 i번째 항 부터 1개만 제거 = 가장 작은 숫자 제거
    return arr;
}