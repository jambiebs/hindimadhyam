      let currentQuestion = 0;
      let score = 0;
      let timeLeft = 300;
      let timerInterval;

      function displayQuestion() {
        const questionElement = document.getElementById('question');
        questionElement.textContent = questions[currentQuestion].sentence;

        document.getElementById('option1').textContent = questions[currentQuestion].option1;
        document.getElementById('option2').textContent = questions[currentQuestion].option2;
        document.getElementById('option3').textContent = questions[currentQuestion].option3;
        document.getElementById('option4').textContent = questions[currentQuestion].option4;
      }

      function updateQuestionNumber() {
        const questionNumberElement = document.getElementById('questionNumber');
        questionNumberElement.textContent = `#${currentQuestion + 1}`;
      }

      function checkAnswer(selectedOption) {
        const correctAnswer = questions[currentQuestion].answer;
        const resultElement = document.getElementById('result');
        if (selectedOption === correctAnswer) {
          resultElement.textContent = "Correct!";
          resultElement.style.color = "green";
          resultElement.style.fontWeight = "bold";
          score++;
        } else {
          resultElement.textContent = "Incorrect!";
          resultElement.style.color = "red";
          resultElement.style.fontWeight = "bold";
        }
        updateScore();
        setTimeout(nextQuestion, 750);
      }

      function updateScore() {
        const scoreElement = document.getElementById('score');
        scoreElement.textContent = `Score: ${score} / ${questions.length}`;
      }

      function nextQuestion() {
        currentQuestion++;
        if (currentQuestion < questions.length) {
          displayQuestion();
          updateQuestionNumber();
          document.getElementById('result').textContent = "";
        } else {
          endQuiz();
        }
      }

      function endQuiz() {
        document.getElementById('question').textContent = "Quiz completed!";
        document.getElementById('options').style.display = 'none';
        document.getElementById('result').textContent = "";
        clearInterval(timerInterval);
      }

      const buttons = document.querySelectorAll('.quiz-button');
      buttons.forEach(button => {
        button.addEventListener('click', function() {
          checkAnswer(this.id);
        });
      });

      let timerStarted = false;

      document.getElementById('options').addEventListener('click', function() {
        if (!timerStarted) {
          updateTimer();
          timerStarted = true;
        }
      });

      const timerElement = document.getElementById('timer');

      function updateTimer() {
        timerInterval = setInterval(() => {
          if (timeLeft > 0) {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `Time left: ${minutes}m ${seconds}s`;
            timeLeft--;
          } else {
            clearInterval(timerInterval);
            endQuiz();
          }
        }, 1000);
      }

      displayQuestion();
      updateQuestionNumber();
