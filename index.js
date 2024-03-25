//llllll
const names = [
  "Alice",
  "Bob",
  "Andrew",
  "Paul",
  "Jessica",
  "Chipp",
  "Millia",
  "Xi",
  "Rebecca",
  "Ohtani",
  "Chael",
  "Fernando",
];
const prices = [30, 50, 20, 100, 10, 80, 70, 40];
const occupations = [
  "Writer",
  "Teacher",
  "Programmer",
  "Line Cook",
  "Web Developer",
  "Professional Gamer",
  "Ninja",
  "President of China",
  "Missionary",
  "Food Coloring Sommelier",
  "Bacon Grease Recycler",
  "Professional Apple Dewormer",
  "Amateur Boxer",
  "Farmhand",
];
const freelancers = [
  {
    name: "Alice",
    price: 30,
    occupation: "Writer",
  },
  {
    name: "Bob",
    price: 50,
    occupation: "Teacher",
  },
];
const maxFreelancers = 8;
function addFreelancer() {
  if (freelancers.length >= maxFreelancers) {
    clearInterval(addFreelancerIntervalId);
  }
}
const addFreelancerIntervalId = setInterval(addFreelancer, 1000);
function priceAverage(prices) {
  if (prices.length === 0) {
    return 0; //checks if array is empty and returns 0 if there isn't any data
  } else {
    const sum = prices.reduce((acc, num) => acc + num, 0);
  }
  {
    const average = sum / prices.length;
    return average;
  }
}
render();
console.log(priceAverage(0));
