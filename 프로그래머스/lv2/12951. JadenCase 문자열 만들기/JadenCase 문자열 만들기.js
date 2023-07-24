function solution(s) {
  //문자열을 공백 기준으로 자른후 각 문자열들의 첫글자를 어퍼케이스 하고,
  //첫글자를 자른 나머지 글자들을 로워케이스로 소문자로 변환.
  //숫자는 어퍼케이스를 해도 동일한 결과가 나오기 때문에 굳이 숫자에 대한 다른 로직이 필요 없다.
  //마지막으로 다시 글자들을 공백을 넣어 조인하여 반환한다.
  return s.split(" ").map(word =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join(" ");
}
