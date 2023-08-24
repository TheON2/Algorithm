function solution(people, limit) {
    people.sort((a, b) => b - a);
    let left = 0;
    let right = people.length - 1;
    let boats = 0;
    
    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            right--;
        }
        left++;
        boats++;
    }
    
    return boats;
}
