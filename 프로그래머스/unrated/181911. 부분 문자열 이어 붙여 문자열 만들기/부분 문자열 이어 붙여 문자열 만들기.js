function solution(my_strings, parts) {
  let result=""
  for (let i = 0; i < my_strings.length; i++) {
    result += my_strings[i].slice(parts[i][0],parts[i][1]+1)
  }
  return result
}