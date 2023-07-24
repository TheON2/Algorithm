function solution(s) {
    const numbers = s.split(' ').map(Number);
    return Math.min(...numbers) + ' ' + Math.max(...numbers);
}