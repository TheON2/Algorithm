function solution(brown, yellow) {
    let arr = [];
        for (let c = 1; c <= Math.sqrt(brown + yellow); c++) {
        let r = (brown+yellow)/c;
    if ( r % 1 === 0) {
        if((r-2) * (c-2) === yellow) arr = [r,c];
        }
    }
    return arr;
}

//1부터 총카펫의 격자의 수(total)만큼 카펫의 가로길이(width)를 설정하면서 for문을 돕니다. 
//카펫의 세로 길이(height)를 총카펫의 격자의 수(total) / 카펫의 가로길이(width)로 설정하고, 
//(width-2) * (height-2)의 값이 카펫의 노란색 격자의 수(yellow)와 일치하면 answer에 width와 height를 담는다.
//카펫의 가로와 세로 길이를 담은 결과 반환 배열(answer)을 반환한다.