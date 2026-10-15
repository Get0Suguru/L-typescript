

const obj = {
  name: "John", 
  age: 20,
  class: "10th",
  speak() {
    console.log("Hello");
  }
}

// delete obj.class;  // can't like js

for(const [k, v] of Object.entries(obj)){
  console.log(k, v);
}