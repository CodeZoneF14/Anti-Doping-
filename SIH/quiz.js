document.getElementById('submit-quiz').addEventListener('click', function () {
    const answers = {
        q1: 'b',
        q2: 'd',
        q3: 'a',
        q4: 'b',
        q5: 'b',
        q6: 'b',
        q7: 'c',
        q8: 'b',
        q9: 'a',
        q10: 'a'
    };

    let score = 0;
    let totalQuestions = Object.keys(answers).length;

    for (let i = 1; i <= totalQuestions; i++) {
        const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedOption && selectedOption.value === answers[`q${i}`]) {
            score++;
        }
    }

    const resultContainer = document.getElementById('quiz-result');
    resultContainer.innerHTML = `<h3>Your score: ${score} out of ${totalQuestions}</h3>`;

    if (score === totalQuestions) {
        resultContainer.innerHTML += `<p>Excellent! You got all the answers correct!</p>`;
    } else if (score >= totalQuestions / 2) {
        resultContainer.innerHTML += `<p>Good job! You scored above average.</p>`;
    } else {
        resultContainer.innerHTML += `<p>Keep trying! You'll improve with more practice.</p>`;
    }
});
