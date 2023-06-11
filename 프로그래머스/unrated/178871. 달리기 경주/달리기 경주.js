function solution(players, callings) {
  const pMap = {};
  for (let i = 0; i < players.length; i++) pMap[players[i]]=i;

  for (let i = 0; i < callings.length; i++) {
    let idx = pMap[callings[i]];
      let temp = players[idx-1]
      players[idx-1] = callings[i]
      players[idx] = temp;

      pMap[callings[i]] = idx-1
      pMap[temp] = idx;
  }
  return players
}