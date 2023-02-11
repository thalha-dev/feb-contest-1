/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  let newarr = arr.map((item) => {
    if (item.marks > 50) {
      return item;
    }
  });
  console.log(newarr);
}

function PrintStudentsbyForEach() {
  let newarr = arr.forEach((item) => {
    if (item.marks > 50) {
      console.log(item);
    }
  });
}

function addData() {
  newObject = { id: 4, name: "susan", age: "20", marks: 45 };
  arr.push(newObject);
  console.log(arr);
}

function removeFailedStudent() {
  let newarr = arr.map((item) => {
    if (item.marks >= 50) {
      return item;
    }
  });
  arr = newarr;
  console.log(arr);
}

function concatenateArray() {
  arr = [
    ...arr,
    { id: 4, name: "mark", age: "22", marks: 65 },
    { id: 5, name: "luke", age: "21", marks: 85 },
    { id: 6, name: "mathew", age: "24", marks: 25 },
  ];
  console.log(arr);
}
