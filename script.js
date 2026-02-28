let score1 = 0;
let score2 = 0;
let currentTeam = 1;

const muhakiQuestions = [
  {
    question: "ما هي عاصمة عُمان؟",
    answers: ["مسقط", "دبي", "الرياض", "الكويت"],
    correct: 0
  },
  {
    question: "كم عدد كواكب المجموعة الشمسية؟",
    answers: ["7", "8", "9", "10"],
    correct: 1
  }
];

const randomQuestions = [
  {
    question: "كم عدد أيام الأسبوع؟",
    answers: ["5", "6", "7", "8"],
    correct: 2
  },
  {
    question: "ما هو أسرع حيوان بري؟",
    answers: ["الأسد", "الفهد", "النمر", "الحصان"],
    correct: 1
  }
];

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("hostDisplay").innerText = localStorage.getItem("host");
  document.getElementById("team1Display").innerText = localStorage.getItem("team1");
  document.getElementById("team2Display").innerText = localStorage.getItem("team2");
  loadQuestion();
});

function loadQuestion() {
  const category = localStorage.getItem("category");
  const questions = category === "muhaki" ? muhakiQuestions : randomQuestions;

  const random = Math.floor(Math.random() * questions.length);
  const q = questions[random];

  document.getElementById("question").innerText =
    `دور ${currentTeam === 1 ? localStorage.getItem("team1") : localStorage.getItem("team2")}\n\n${q.question}`;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.innerText = answer;
    btn.onclick = function() {
      if(index === q.correct) {
        if(currentTeam === 1){
          score1++;
          document.getElementById("score1").innerText = score1;
        } else {
          score2++;
          document.getElementById("score2").innerText = score2;
        }
        alert("إجابة صحيحة ✅");
      } else {
        alert("إجابة خاطئة ❌");
      }
      currentTeam = currentTeam === 1 ? 2 : 1;
    };
    answersDiv.appendChild(btn);
  });
}

function nextQuestion(){
  loadQuestion();
}