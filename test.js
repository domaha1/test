// let iceCreamFlavors = [
//   "Chocolate",
//   "Strawberry",
//   "Vanilla",
//   "Pistachio",
//   "Neapolitan",
//   "Mint Chip",
// ];
// let result = iceCreamFlavors.find((flavor) => flavor === "Chocolate"); // "Chocolate"
// console.log(result);

let iceCreamFlavors = [
  { name: "Chocolate", type: "Chocolate", price: 2 },
  { name: "Strawberry", type: "Fruit", price: 1 },
  { name: "Vanilla", type: "Vanilla", price: 2 },
  { name: "Pistachio", type: "Nuts", price: 1.5 },
  { name: "Neapolitan", type: "Chocolate", price: 2 },
  { name: "Mint Chip", type: "Chocolate", price: 1.5 },
  { name: "Raspberry", type: "Fruit", price: 1 },
];
let result = iceCreamFlavors.filter((flavor) => flavor.type === "Chocolate"); // [{ name: "Chocolate", type: "Chocolate" }, { name: "Neapolitan", type: "Chocolate"}, { name: "Mint Chip", type: "Chocolate"}]
let result2 = iceCreamFlavors.some((flavor) => flavor.type === "Nuts"); // true
console.log(result);
if (result2) {
  console.log("نعم يوجد");
}
let result3 = iceCreamFlavors.filter((flavor) => flavor.type !== "Nuts"); // returns everything except for Pistachio.
console.log("واليك الايسكريم الخالي", result3);

// let result4 =iceCreamFlavors.map((flavor) => {
//   flavor.price = 1;
//   return flavor;
// });
// console.log(result4);

let sales = [
  {
    date: "2021-05-01",
    amount: 2,
  },
  {
    date: "2021-05-01",
    amount: 1,
  },
  // and so on...
];
let result5 = sales.reduce((acc, curr) => acc + curr.amount, 0);
console.log(result5);
// { scoops: [], total: }
let transactions = [];

transactions.push({
  scoops: ["Chocolate", "Vanilla", "Mint Chip"],
  total: 5.5,
});
transactions.push({ scoops: ["Raspberry", "StrawBerry"], total: 2 });
transactions.push({ scoops: ["Vanilla", "Vanilla"], total: 4 });

const total = transactions.reduce((acc, curr) => acc + curr.total, 0);
console.log(`You've made ${total} $ today`); // You've made 11.5 $ today
 