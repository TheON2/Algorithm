function solution(names) {
  return names.filter((name,i)=>{
    if(i%5===0)return name
  })
}