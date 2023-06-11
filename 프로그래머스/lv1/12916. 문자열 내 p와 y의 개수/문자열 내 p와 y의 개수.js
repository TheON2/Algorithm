function solution(s){
    let cntp = 0;
    let cnty = 0;
    
    for (let i = 0; i < s.length; i++) {
    let ch = s.charAt(i);

    if (ch === 'p' || ch === 'P') cntp++;
    else if (ch === 'y' || ch === 'Y') cnty++;
  }

  if (cntp === cnty) return true;
  else return false;
    
}