function solution(num_list) {
  return num_list=num_list.sort((a,b)=> a-b).filter((n,i)=>{if(i>4)return n})
}
