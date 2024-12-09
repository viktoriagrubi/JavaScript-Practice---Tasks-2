/* Stwórz funkcję calculateOrderSummary(orders), która przyjmuje tablicę
obiektów reprezentujących zamówienia. Każde zamówienie zawiera:

● id (numer zamówienia),
● items (tablica przedmiotów, gdzie każdy przedmiot ma name, price i
quantity),
● discount (procent zniżki na całe zamówienie).

Funkcja powinna zwracać obiekt z:

1. Liczbą wszystkich zamówień.
2. Suma wszystkich pozycji w zamówieniach.
3. Łącznym kosztem zamówień po zniżkach. */

function calculateOrderSummary(orders) {
  const totalOrders = orders.length; // suma zamówień
  let totalItems = 0; // ilość
  let totalCost = 0; // koszt po zniżkach

  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];
    let orderTotal = 0;

    for (let j = 0; j < order.items.length; j++) {
      const item = order.items[j];
      totalItems += item.quantity; // suma ilości
      orderTotal += item.price * item.quantity; // koszt zamówień przed obniżką
    }

    const discountFactor = 1 - order.discount / 100; // zniżka
    totalCost += orderTotal * discountFactor; // koszt po zniżce
  }

  return {
    totalOrders,
    totalItems,
    totalCost,
  };
}

const orders = [
  {
    id: 1,
    items: [
      { name: "Laptop", price: 3000, quantity: 1 },
      { name: "Myszka", price: 150, quantity: 2 },
    ],
    discount: 10, // procent
  },
  {
    id: 2,
    items: [
      { name: "Monitor", price: 1000, quantity: 1 },
      { name: "Klawiatura", price: 200, quantity: 1 },
    ],
    discount: 5,
  },
];

console.log(calculateOrderSummary(orders));

/* Oczekiwany wynik:

{
totalOrders: 2,
totalItems: 5,
totalCost: 3825
}

*/
