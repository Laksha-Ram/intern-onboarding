//variables
const internName = "Laksha";
let tasksCompleted = 1;

//functions
const greetArray = (name) => {
    return `Hello, ${name}! Welcome to Day 2. `;
};

//Arrays
const skills = ["Git", "JavaScript", "Node.js"];

skills.forEach((skill) => {
    console.log("Learning:", skill);
});

//Objects
const intern = {
  name: "Laksha",
  role: "Intern",
  day: 2,
  skills: ["Git", "JavaScript"]
};
console.log(intern.name);
console.log(intern.skills[0]);

//Error Handling 
try {
  let result = 10 / 0;
  console.log(result);
} catch (error) {
  console.error("Something went wrong:", error.message);
}

//Sync vs Async
//Syns --> Blocking
console.log("Start");
console.log("Processing...");
console.log("End");
//Async --> Unblocking
console.log("Start");

setTimeout(() => {
  console.log("Processing...");
}, 2000);

console.log("End");

//Promises(Async Foundation)
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
};

fetchData().then((data) => {
  console.log(data);
});

//Async/Await 
const fetchDataAsync = async () => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

fetchDataAsync();

//Final Script
const processInternData = async () => {
  console.log(greetArrow(intern.name));

  console.log("Skills:");
  intern.skills.forEach((skill) => console.log("-", skill));

  await fetchDataAsync();

  console.log("Day 2 task completed successfully 🎉");
};

processInternData();


