const person = {
  name: "Andrew",
  age: 26,
  location: {
    city: "Philadephia",
    // temp: 92 // comment for test default value
  },
};

const { name, age } = person;
console.log(`${name} is ${age}`);

const { city, temp: temperature = 20 } = person.location;

if (city && temperature) {
  // console.log(`It's ${temp} in ${city}`)
  console.log(`It's ${temperature} in ${city}`);
}
