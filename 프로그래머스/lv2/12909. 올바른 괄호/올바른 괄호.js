function solution(s){
    let stackCount = 0;
    for (let i = 0; i < s.length; i++) {
        stackCount += s[i] === '(' ? 1 : -1;
        // 무조건 열린 횟수가 닫힌 횟수보다 많아야 한다.
        // 삼항 연산자로 연 횟수를 +로 닫흰 횟수를 -로 계산한다.
        if (stackCount < 0) return false;
        //열린횟수보다 닫힌횟수가 많아지면 잘못된 괄호로 판단해서 바로 false 리턴
    }
    return stackCount === 0 ? true : false;
}
