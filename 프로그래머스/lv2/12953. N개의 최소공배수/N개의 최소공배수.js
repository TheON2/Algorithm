// 유클리드 알고리즘을 사용하여 최대공약수를 구하는 함수
function gcd(a, b) {
    while (b !== 0) {
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
}

// 두 수의 최소공배수를 구하는 함수
function lcm(a, b) {
    return a * b / gcd(a, b);
}

function solution(arr) {
    // 배열의 첫 번째 원소를 시작점으로 설정
    let result = arr[0];

    // 배열의 두 번째 원소부터 마지막 원소까지 순회
    for (let i = 1; i < arr.length; i++) {
        // 현재 result와 i번째 원소의 최소공배수를 구하여 result 업데이트
        result = lcm(result, arr[i]);
    }

    return result;
}

console.log(solution([2,6,8,14])); // 168
console.log(solution([1,2,3]));    // 6