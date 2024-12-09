/* Napisz funkcję generateWeatherReport(weatherData), która generuje raport
pogodowy na podstawie danych wejściowych.

● weatherData to tablica obiektów, gdzie każdy obiekt zawiera:
○ city (nazwa miasta),
○ temperature (temperatura w stopniach Celsjusza),
○ humidity (wilgotność w procentach),
○ windSpeed (prędkość wiatru w km/h).

Funkcjonalności:
1. Znajdź miasto z najwyższą i najniższą temperaturą.
2. Policz średnią wilgotność i prędkość wiatru dla wszystkich miast.
3. Posortuj dane według temperatury rosnąco. */

function generateWeatherReport(weatherData) {
  //1
  let highest = weatherData[0];
  let lowest = weatherData[0];

  for (let city of weatherData) {
    if (city.temperature > highest.temperature) highest = city;
    if (city.temperature < lowest.temperature) lowest = city;
  }

  //2
  let totalHumidity = 0;
  let totalWindSpeed = 0;

  for (let city of weatherData) {
    totalHumidity += city.humidity;
    totalWindSpeed += city.windSpeed;
  }

  let averageHumidity = totalHumidity / weatherData.length;
  let averageWindSpeed = totalWindSpeed / weatherData.length;

  //3
  const sortedByTemperature = [...weatherData].sort(
    (a, b) => a.temperature - b.temperature
  );

  return {
    highestTemperature: highest.city,
    lowestTemperature: lowest.city,
    averageHumidity: averageHumidity,
    averageWindSpeed: averageWindSpeed,
    sortedByTemperature: sortedByTemperature,
  };
}

const weatherData = [
  { city: "Warsaw", temperature: 10, humidity: 80, windSpeed: 15 },
  { city: "Krakow", temperature: 15, humidity: 70, windSpeed: 10 },
  { city: "Gdansk", temperature: 5, humidity: 90, windSpeed: 20 },
];

console.log(generateWeatherReport(weatherData));

/* Oczekiwany wynik:
{
highestTemperature: "Krakow",
lowestTemperature: "Gdansk",
averageHumidity: 80,
averageWindSpeed: 15,
sortedByTemperature: [
{ city: "Gdansk", ... },
{ city: "Warsaw", ... },
{ city: "Krakow", ... }
]
} */
