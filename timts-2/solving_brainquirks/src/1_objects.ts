

const obj = {
  name: "John", 
  age: 20,
  class: "10th",
  speak() {
    console.log("Hello");
  }
}

for(const k in obj){
  console.log(k);
}