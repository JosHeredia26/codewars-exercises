// Instructions: https://www.codewars.com/kata/5808c8eff0ed4210de000008

function part(a) {
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
  const filter_list = a.filter((e) => list.includes(e));
  return filter_list.length == 0
    ? "Lynn, I've pierced my foot on a spike!!"
    : "Mine's a Pint" + "!".repeat(filter_list.length);
}
