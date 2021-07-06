const getNickName = () => {
    return window.localStorage.getItem('nickname') ?? '';
}

// function getNickName() {
//     return window.localStorage.getItem('nickname') ?? '';
// }

const getNickName = () => {
    return window.localStorage.getItem('nickname') ?? '';
}

const saveNickName = (nickname) => {
    window.localStorage.setItem("nickname", nickname)}



const generateAnswer = () => {
    let candidateNumbers = [];
    for (let number = 0; number < 10; number++) {
        candidateNumbers.push(number);

    }
    answerNumber = [];
    while (answerNumber.length < 4) {
        const randomizeIndex = Math.floor(Math.random() * candidateNumbers.length);
        answerNumber.push(candidateNumbers[randomizeIndex]);
        candidateNumbers.splice(randomizeIndex, 1);
    }
    return answerNumber;
}

const getHint = (guessNumber, answerNumber) => {
    let index = 0;
    let hintA = 0;
    let hintB = 0;
    guessNumber.forEach((number) => {
        if (number == answerNumber[index]) {
            hintA += 1;
            index += 1;
            return;
        }
        if (answerNumber.includes(parseInt(number))) {
            hintB += 1;
        }
        index += 1;
    });
    return `${hintA}A${hintB}B`;
}
