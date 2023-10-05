function solution(my_string, alp) {
  let result = "";

  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] === alp) {
      result += my_string[i].toUpperCase();
    } else {
      result += my_string[i];
    }
  }

  return result;
}