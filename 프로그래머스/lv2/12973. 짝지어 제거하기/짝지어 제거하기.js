function solution(s) {
  const stack = [];
  for (const char of s) {
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop(); // 짝을 찾아 제거
    } else {
      stack.push(char); // 스택에 추가
    }
  }
  return stack.length === 0 ? 1 : 0; // 스택이 비어있다면 1, 아니라면 0을 반환
}