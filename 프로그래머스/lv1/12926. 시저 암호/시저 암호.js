function solution(s, n) {
  let result = "";
  for(let i = 0; i < s.length; i++) {
    let ascii = s[i].charCodeAt();
    if(ascii >= 65 && ascii <= 90) {
      // 대문자인 경우
      result += String.fromCharCode((ascii - 65 + n) % 26 + 65);
    } else if(ascii >= 97 && ascii <= 122) {
      // 소문자인 경우
      result += String.fromCharCode((ascii - 97 + n) % 26 + 97);
    } else {
      // 알파벳이 아닌 문자는 그대로 추가
      result += s[i];
    }
  }
  return result;
}