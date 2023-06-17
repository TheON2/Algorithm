function solution(sizes) {
  let x=[]
  let y=[]
  sizes.forEach((a)=>{x.push(a[0]),y.push(a[1])})
  for (let i = 0; i < sizes.length; i++) {
    if(x[i]<y[i]) [x[i],y[i]] = [y[i],x[i]]
  }
  let maxX = Math.max(...x)
  let maxY = Math.max(...y)
  return maxX*maxY
}