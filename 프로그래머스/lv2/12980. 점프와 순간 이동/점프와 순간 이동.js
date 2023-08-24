function solution(N) {
    let battery = 0; // 건전지 사용량 초기화

    while (N > 0) { // 거리 N이 0이 될 때까지 반복
        if (N % 2 === 1) { // 거리 N이 홀수인 경우
            battery += 1; // 건전지 사용량 1 증가
            N -= 1;       // 점프로 1만큼 거리 감소
        }
        N /= 2; // 순간 이동으로 거리를 2로 나눔 (건전지 사용량 증가 없음)
    }

    return battery; // 최소 건전지 사용량 반환
}
