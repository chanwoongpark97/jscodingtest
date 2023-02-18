process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
  // 몇 줄을 나타낼지 정하는 할 세로 줄
    for (let i = 0; i < b; i++) {
        let star = ""
        // 별 몇개를 찍을 개수를 정하는 가로 줄
        for (let j = 0; j < a; j++) {
            star = star + "*"
        }
        console.log(star)
    }
});