/* Napisz funkcję manageLibrary(books, action, payload), która zarządza
biblioteką. Funkcja przyjmuje:

1. books – tablicę obiektów, gdzie każdy obiekt zawiera:
○ title (tytuł książki),
○ author (autor),
○ isAvailable (czy książka jest dostępna).

2. action – typ operacji do wykonania:
○ "add" – dodaje nową książkę (dane w payload).
○ "remove" – usuwa książkę na podstawie tytułu (payload zawiera
title).
○ "borrow" – ustawia isAvailable na false dla podanej książki
(payload zawiera title).
○ "return" – ustawia isAvailable na true dla podanej książki
(payload zawiera title).

Funkcja powinna zwracać zaktualizowaną tablicę książek. 
// Dodawanie książki

manageLibrary(books, "add", { title: "Dune", author: "Frank
Herbert", isAvailable: true });

// Wypożyczanie książki
manageLibrary(books, "borrow", { title: "1984" });

// Zwracanie książki
manageLibrary(books, "return", { title: "1984" });

*/

function manageLibrary(books, action, payload) {
  switch (action) {
    case "add":
      books.push({
        title: payload.title,
        author: payload.author,
        isAvailable: payload.isAvailable,
      });
      break;
    case "remove":
      books = books.filter((book) => book.title !== payload.title);
      break;
    case "borrow":
      const bookToBorrow = books.find((book) => book.title === payload.title);
      if (bookToBorrow) {
        bookToBorrow.isAvailable = false;
      } else {
        console.log(
          `Książka o tytule "${payload.title}" nie została znaleziona.`
        );
      }
      break;
    case "return":
      const booktoReturn = books.find((book) => book.title === payload.title);
      if (booktoReturn) {
        booktoReturn.isAvailable = true;
      } else {
        console.log(
          `Książka o tytule "${payload.title}" nie została znaleziona.`
        );
      }
      break;
    default:
      console.log("Nieznana akcja.");
  }
  return books;
}

const books = [
  { title: "1984", author: "George Orwell", isAvailable: true },
  { title: "Brave New World", author: "Aldous Huxley", isAvailable: true },
];

const newBook = { title: "Dune", author: "Frank Herbert", isAvailable: true };
console.log(manageLibrary(books, "add", newBook));

const bookToRemove = { title: "1984" };
console.log(manageLibrary(books, "remove", bookToRemove));

const bookToBorrow = { title: "Brave New World" };
console.log(manageLibrary(books, "borrow", bookToBorrow));

const bookToReturn = { title: "Brave New World" };
console.log(manageLibrary(books, "return", bookToReturn));

/*  Oczekiwane wyniki:
    1. Po dodaniu:
    [
    { title: "1984", author: "George Orwell", isAvailable: true
    },
    { title: "Brave New World", author: "Aldous Huxley",
    isAvailable: true },
    { title: "Dune", author: "Frank Herbert", isAvailable: true
    }
    ]
    
    2. Po wypożyczeniu:
    [
    { title: "1984", author: "George Orwell", isAvailable: false
    },
    { title: "Brave New World", author: "Aldous Huxley",
    isAvailable: true },
    { title: "Dune", author: "Frank Herbert", isAvailable: true
    }
    ]
    
    3. Po zwróceniu:
    [
    { title: "1984", author: "George Orwell", isAvailable: true
    },
    
    { title: "Brave New World", author: "Aldous Huxley",
    isAvailable: true },
    { title: "Dune", author: "Frank Herbert", isAvailable: true
    }
    ]

*/
