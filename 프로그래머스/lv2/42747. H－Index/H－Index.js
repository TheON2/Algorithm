function solution(citations) {
    var answer = 0;

    // 인용 횟수를 내림차순으로 정렬
    citations = citations.sort((a, b) => b - a);

    let arr = [];  // 현재까지 검사한 논문의 인용 횟수를 저장

    for (let i = 0; i < citations.length; i++) {
        arr.push(citations[i]);  // 논문의 인용 횟수를 arr에 추가

        // 해당 논문의 인용 횟수가 현재까지 검사한 논문의 수보다 적다면 반복을 멈춤
        if (citations[i] < arr.length) {
            break;
        }
        
        answer++;  // 가능한 H-Index 값을 1 증가
    }

    return answer;  // H-Index 반환
}
