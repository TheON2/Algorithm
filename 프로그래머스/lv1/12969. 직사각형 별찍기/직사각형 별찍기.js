process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  let n = data.split(" ");
  const a = Number(n[0]), b = Number(n[1]);
  n = '';
  for (let i = 0; i < b ; i++) {
    for (let j = 0; j < a ; j++) {
      n+='*'
    }
    n+='\n'
  }
    console.log(n)
});