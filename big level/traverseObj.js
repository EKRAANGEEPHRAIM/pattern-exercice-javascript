//The journey of an embedded object

function traverse(obj) {
  for (let key in obj) {
    if (obj[key] !== null && typeof obj[key] === "object") {
      traverse(obj[key]);
    } else {
      console.log(obj[key]);
    }
  }
}

const user = {
  name: "Ange",
  age: 25,
  address: {
    city: "Abidjan",
    country: "Côte d'Ivoire",
    location: {
      lat: 5.34,
      lng: -4.02
    }
  }
};
console.log(traverse(user))
/**
 * Ange
25
Abidjan
Côte d'Ivoire
5.34
-4.02
undefined

 */