/* Stwórz funkcję analyzeSalesData(salesData, metric), która analizuje dane
sprzedażowe i zwraca wynik w zależności od wybranego metryki
("totalRevenue", "bestSeller", "lowStock", "categorySummary").
● salesData – tablica obiektów z polami:
○ productName,
○ category,
○ price,
○ unitsSold,
○ stock.

Funkcjonalności:
1. "totalRevenue" – Oblicza całkowity przychód (cena × liczba sprzedanych
jednostek).
2. "bestSeller" – Zwraca nazwę produktu z najwyższą liczbą sprzedanych
jednostek.
3. "lowStock" – Zwraca produkty, których stock jest mniejszy niż 10.
4. "categorySummary" – Zwraca obiekt z podsumowaniem sprzedaży według
kategorii. */

function analyzeSalesData(salesData, metric) {
  //1
  let totalRevenue = 0;
  salesData.forEach((product) => {
    totalRevenue += product.price * product.unitsSold;
  });

  //2
  let bestSeller = salesData[0];
  salesData.forEach((product) => {
    if (product.unitsSold > bestSeller.unitsSold) {
      bestSeller = product;
    }
  });

  //3
  const lowStock = salesData.filter((product) => product.stock < 10);

  //4
  const categorySummary = {};
  salesData.forEach((product) => {
    if (!categorySummary[product.category]) {
      categorySummary[product.category] = {
        totalRevenue: 0,
        totalUnitsSold: 0,
      };
    }
    categorySummary[product.category].totalRevenue +=
      product.price * product.unitsSold;
    categorySummary[product.category].totalUnitsSold += product.unitsSold;
  });

  // Logika wyboru metryki
  if (metric === "totalRevenue") {
    return totalRevenue;
  } else if (metric === "bestSeller") {
    return bestSeller.productName;
  } else if (metric === "lowStock") {
    return lowStock;
  } else if (metric === "categorySummary") {
    return categorySummary;
  } else {
    return "Invalid metric";
  }
}

const salesData = [
  {
    productName: "Laptop",
    category: "Electronics",
    price: 3000,
    unitsSold: 20,
    stock: 5,
  },
  {
    productName: "Headphones",
    category: "Electronics",
    price: 150,
    unitsSold: 50,
    stock: 30,
  },
  {
    productName: "Book",
    category: "Books",
    price: 50,
    unitsSold: 100,
    stock: 200,
  },
];

console.log(analyzeSalesData(salesData, "totalRevenue"));
console.log(analyzeSalesData(salesData, "bestSeller"));
console.log(analyzeSalesData(salesData, "lowStock"));
console.log(analyzeSalesData(salesData, "categorySummary"));

/* Oczekiwany wynik dla "totalRevenue":
45000 */
