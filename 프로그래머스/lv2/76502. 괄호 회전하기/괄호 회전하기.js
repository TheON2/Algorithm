function solution(s) {
    let answer = 0;
    
    // 주어진 문자열 s가 올바른 괄호 문자열인지 확인하는 함수
    const isValid = (str) => {
        const stack = [];
        const bracketMap = {
            ')': '(',
            '}': '{',
            ']': '['
        };

        for (let char of str) {
            if (['(', '{', '['].includes(char)) {
                stack.push(char);
            } else {
                if (stack.length === 0) return false;
                if (bracketMap[char] !== stack[stack.length - 1]) return false;
                stack.pop();
            }
        }
        return stack.length === 0;  // 스택이 비어있으면 올바른 괄호 문자열
    };
    
    // 문자열 s의 길이만큼 회전하면서 올바른 괄호 문자열인지 검사
    for (let i = 0; i < s.length; i++) {
        if (isValid(s)) answer++;
        s = s.slice(1) + s[0];  // 문자열을 왼쪽으로 1칸 회전
    }
    
    return answer;
}

// 예제 테스트
console.log(solution("[](){}"));  // 3
console.log(solution("}]()[{"));  // 2
console.log(solution("[)(]"));    // 0
console.log(solution("}}}"));     // 0
