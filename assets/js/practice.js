const person = {
    name: "fayaz",
    address: "umar talao",
    age: 30,
}

const p = { ...person }

p.fname = "khan"
console.log(p);

console.log(person);