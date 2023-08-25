function solution(N, A, B) {
    // 라운드를 카운트하기 위한 변수
    let round = 0;

    // A와 B가 다른 동안 반복
    while (A !== B) {
        // A와 B 번호 업데이트
        A = (A % 2 === 0) ? A / 2 : (A + 1) / 2;
        B = (B % 2 === 0) ? B / 2 : (B + 1) / 2;

        // 라운드 카운트 증가
        round++;
    }

    return round;
}

console.log(solution(8, 4, 7)); // 3