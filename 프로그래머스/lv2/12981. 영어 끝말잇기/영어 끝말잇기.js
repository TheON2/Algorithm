function solution(n, words) {
    const usedWords = new Set(); // 이전에 사용된 단어를 저장할 집합
    let previousWord = words[0]; // 앞사람이 말한 단어
    usedWords.add(previousWord);

    // 두 번째 단어부터 탐색
    for (let i = 1; i < words.length; i++) {
        const word = words[i];

        // 현재 단어가 한 글자거나 이전에 사용되었거나 끝말이 이어지지 않으면 탈락
        if (word.length === 1 || usedWords.has(word) || word[0] !== previousWord[previousWord.length - 1]) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }

        usedWords.add(word);
        previousWord = word;
    }

    return [0, 0];
}
