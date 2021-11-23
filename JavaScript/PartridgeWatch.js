// Instructions: https://www.codewars.com/kata/5808c8eff0ed4210de000008

function part(x) {
  const list = [
    "Partridge",
    "PearTree",
    "Chat",
    "Dan",
    "Toblerone",
    "Lynn",
    "AlphaPapa",
    "Nomad",
  ];
  const filtered_list = x.filter((name) => list.includes(name));
  return filtered_list.length == 0
    ? "Lynn, I've pierced my foot on a spike!!"
    : "Mine's a Pint" + "!".repeat(filter_list.length);
}
