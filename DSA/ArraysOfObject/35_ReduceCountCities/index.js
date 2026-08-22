

const users = [
  {
    id: 101,
    name: "Rahul",
    age: 22,
    city: "Pune",
    salary: 45000,
  },
  {
    id: 102,
    name: "Priya",
    age: 25,
    city: "Mumbai",
    salary: 60000,
  },
  {
    id: 103,
    name: "Amit",
    age: 19,
    city: "Pune",
    salary: 35000,
  },
  {
    id: 104,
    name: "Neha",
    age: 28,
    city: "Mumbai",
    salary: 75000,
  },
  {
    id: 105,
    name: "Rohit",
    age: 31,
    city: "Delhi",
    salary: 55000,
  },
  {
    id: 106,
    name: "Sneha",
    age: 24,
    city: "Pune",
    salary: 50000,
  },
];

const citycount = {};
for (const user of users) {
    if (citycount[user.city]) {
        citycount[user.city]++;
    } else {
        citycount[user.city] = 1;
    }
}
console.log(citycount);




const totalcities = users.reduce((cities, user) => {
    if (cities[user.city]) {
        cities[user.city]++;
    } else {
        cities[user.city] = 1;
    }
    return cities;
}, {})


console.log(totalcities)