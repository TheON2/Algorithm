function solution(s) {
  let resultArr=[]
  let result=''
  const arr = s.split(" ")
  arr.forEach((a)=>{
    let strArr = a.split('')
    for (let i = 0; i < strArr.length; i++) {
      if(i%2===0)strArr[i]=strArr[i].toUpperCase()
      else strArr[i]=strArr[i].toLowerCase()
    }
    let str = ''
    strArr.forEach((a)=>{str+=a})
    resultArr.push(str)
  })
  for (let i = 0; i < resultArr.length; i++) {
    if(i!==resultArr.length-1) result+=resultArr[i]+' '
    else result+=resultArr[i]
  }
  return result
}