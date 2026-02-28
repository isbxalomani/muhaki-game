let score = 0;

const questions = [
  {
    question: "ما هي عاصمة عُمان؟",
    answers: ["مسقط", "دبي", "الرياض", "الكويت"],
    correct: 0
  },
  {
    question: "كم عدد كواكب المجموعة الشمسية؟",
    answers: ["7", "8", "9", "10"],
    correct: 1
  },
  {
    question: "من هو مخترع المصباح الكهربائي؟",
    answers: ["نيوتن", "أينشتاين", "توماس إديسون", "تسلا"],
    correct: 2
  }
];

function loadQuestion() {
  const random = Math.floor(Math.random() * questions.length);
  const q = questions[random];

  document.getElementById("question").innerText = q.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.innerText = answer;
    btn.onclick = function() {
      if(index === q.correct) {
        score++;
        alert("إجابة صحيحة ✅");
      } else {
        score--;
        alert("إجابة خاطئة ❌");
      }
      document.getElementById("score").innerText = score;
    };
    answersDiv.appendChild(btn);
  });
}

function nextQuestion() {
  loadQuestion();
}

loadQuestion();
fetch("https://api.eaxeli.com/quiz?limit=5")
  .then(res => res.json())
  .then(data => console.log(data));