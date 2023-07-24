function solution(s) {
    const numbers = s.split(' ').map(Number);
    //문자열을 공백기준으로 자른 배열의 요소를 map으로 돌며 숫자로 형변환한다.
    return Math.min(...numbers) + ' ' + Math.max(...numbers);
    //구조분해할당으로 numbers의 모든 요소의 최솟값과 최댓값을 구해 공백을 기준으로 붙여 반환
}
