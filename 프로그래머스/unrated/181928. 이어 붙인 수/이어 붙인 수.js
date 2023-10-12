function solution(num_list) {
  let a="";
  let b="";
  num_list.forEach((n,i)=>
  {if(n%2===0)a+=n;
  else b+=n;}
  )
  return Number(a)+Number(b);
}