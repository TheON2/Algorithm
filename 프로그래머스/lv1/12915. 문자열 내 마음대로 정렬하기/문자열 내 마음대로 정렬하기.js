function solution(strings, n) {
    let arr =[];
    for(let i=0 ; i<strings.length ; i ++){
        strings[i]=strings[i].charAt(n)+strings[i];
    }
    strings.sort();
    for(let i=0 ; i<strings.length ; i ++){
        strings[i]=strings[i].slice(1);
    }
    return strings;
    
}