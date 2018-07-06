var inventory = [
  {type:   "machine", value: 5000},
  {type:   "machine", value:  650},
  {type:      "duck", value:   10},
  {type: "furniture", value: 1200},
  {type:   "machine", value:   77}
];
var inventoryType = inventory.filter((inven) => {
   return inven.type === "machine";
});
var totalMachineValue = inventoryType.reduce((value, inven, index,  inventory) => {
  return value += inven.value;
}, 0);

console.log(totalMachineValue);
