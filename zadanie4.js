/* Napisz funkcję analyzeSurvey(results), która przyjmuje tablicę wyników
ankiety. Każdy wynik to obiekt z:

● name (osoba),
● answers (tablica odpowiedzi, gdzie każda odpowiedź ma question i
answer).

Funkcja powinna zwrócić:
1. Liczbę unikalnych pytań.
2. Tablicę osób, które odpowiedziały na wszystkie pytania.
3. Obiekt z pytaniami jako kluczami i tablicą unikalnych odpowiedzi dla każdego
pytania. */

function analyzeSurvey(results) {
  const result = {};
  //1
  //liczba unikalnych zapytań
  //wszytstkie zapytania
  let allQuestions = [];
  for (const person of results) {
    for (const answer of person.answers) {
      allQuestions.push(answer.question);
    }
  }
  //usuwanie duplikatów
  const uniqueQuestions = [...new Set(allQuestions)];
  //suma unikalnych zapytań
  result.uniqueQuestions = uniqueQuestions.length;

  //2
  result.allAnswered = [];
  for (const person of results) {
    if (person.answers.length === uniqueQuestions.length) {
      result.allAnswered.push(person.name);
    }
  }

  //3
  result.answersSummary = {};
  for (const question of uniqueQuestions) {
    result.answersSummary[question] = [];

    for (const person of results) {
      for (const answer of person.answers) {
        if (
          answer.question === question &&
          !result.answersSummary[question].includes(answer.answer)
        ) {
          result.answersSummary[question].push(answer.answer);
        }
      }
    }
  }

  return result;
}

const surveyResults = [
  {
    name: "Anna",
    answers: [
      { question: "Favorite color", answer: "Blue" },
      { question: "Favorite food", answer: "Pizza" },
    ],
  },
  {
    name: "John",
    answers: [
      { question: "Favorite color", answer: "Green" },
      { question: "Favorite food", answer: "Pizza" },
    ],
  },

  {
    name: "Kate",
    answers: [{ question: "Favorite color", answer: "Blue" }],
  },
];

console.log(analyzeSurvey);

/* Oczekiwany wynik:
{
    uniqueQuestions: 2,
    allAnswered: ["Anna", "John"],
    answersSummary: {
    "Favorite color": ["Blue", "Green"],
    "Favorite food": ["Pizza"]
}
} */
