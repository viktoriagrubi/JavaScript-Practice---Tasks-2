/* Stwórz funkcję analyzeEmployeesData(employees), która przyjmuje tablicę
obiektów reprezentujących pracowników. 

Każdy obiekt zawiera:

● name (imię),
● position (stanowisko),
● salary (wynagrodzenie),
● isActive (czy pracownik jest aktywny).

Funkcja powinna zwrócić obiekt z:

1. Liczbą aktywnych pracowników.
2. Łącznym wynagrodzeniem wszystkich pracowników.
3. Tablicą nazwisk pracowników z wynagrodzeniem powyżej podanego progu
(np. salary > 5000). */

function analyzeEmployeesData(employees) {
  //1
  const activeEmployees = employees.filter(
    (employee) => employee.isActive
  ).length;

  //2
  const totalSalaries = employees.reduce(
    (sum, employee) => sum + employee.salary,
    0
  );

  //3
  const highEarners = employees
    .filter((employee) => employee.salary > 5000)
    .map((employee) => employee.name);

  return {
    activeEmployees,
    totalSalaries,
    highEarners,
  };
}

const employees = [
  { name: "Anna", position: "Developer", salary: 6000, isActive: true },
  { name: "John", position: "Manager", salary: 8000, isActive: false },
  { name: "Kate", position: "Designer", salary: 5000, isActive: true },
  { name: "Tom", position: "Tester", salary: 4000, isActive: true },
];

console.log(analyzeEmployeesData(employees));

/* Oczekiwany wynik (dla progu 5000):

{
    activeEmployees: 3,
    totalSalaries: 23000,
    highEarners: ["Anna", "John"]
} 

*/
