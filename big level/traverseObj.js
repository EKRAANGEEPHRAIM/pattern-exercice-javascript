//The journey of an embedded object

function traverse(obj) {
  for (let key in obj) {
    if (obj[key] !== null && typeof obj[key] === "object") {
      traverse(obj[key]);
    } else {
      console.log(key + " : " + obj[key]);
    }
  }
}

const user = {
  name: "Ange",
  age: 25,
  address: {
    city: "Abidjan",
    country: "Côte d'Ivoire",
    
  }
};
traverse(user)

/**
 * name : Ange
age : 25
city : Abidjan
country : Côte d'Ivoire
 */