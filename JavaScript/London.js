// Intructions: https://www.codewars.com/kata/580a41b6d6df740d6100030c

function alan(x) {
  const stations = [
    "Rejection",
    "Disappointment",
    "Backstabbing Central",
    "Shattered Dreams Parkway",
  ];
  filtered_stations = Array.from(new Set(x)).filter((station) =>
    stations.includes(station)
  );
  return filtered_stations === stations
    ? "Smell my cheese you mother!"
    : "No, seriously, run. You will miss it.";
}
