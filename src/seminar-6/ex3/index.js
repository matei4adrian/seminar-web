// let evenColection = document.querySelectorAll("tbody tr:nth-child(even)");
// let oddColection = document.querySelectorAll("tbody tr:nth-child(odd)");

// if (evenColection && evenColection.length > 0) {
//   for (let item of evenColection) {
//     item.bgColor = "red";
//   }
// }

// if (oddColection && oddColection.length > 0) {
//   for (let item of oddColection) {
//     item.bgColor = "yellow";
//   }
// }

let first = document.querySelector("tbody tr:first-child");
first.bgColor = "blue";

let last = document.querySelector("tbody tr:last-child");
last.bgColor = "green";

let oddCollection = document.querySelectorAll("tbody tr:nth-child(odd)");

if (oddCollection && oddCollection.length > 0) {
  for (let item of oddCollection) {
    if (
      oddCollection[0] !== item &&
      oddCollection[oddCollection.length - 1] !== item
    ) {
      item.bgColor = "pink";
    }
  }
}
