const mongoose = require("mongoose");
const Recipe = require("./models/Recipe"); // Import of the model Recipe from './models/Recipe'
const data = require("./data.js"); // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose
  .connect("mongodb://localhost/recipeApp", { useNewUrlParser: true })
  .then(_ => console.log("Connected to Mongo!"))
  .catch(err => console.error("Error connecting to mongo", err));

Recipe.insertMany(data);
console.log(data);

Recipe.create({
  title: "Ramen",
  level: "Amateur Chef",
  ingredients: ["Ramen Noodles", "Egg", "Pork Belly", "Bamboo Shoots"],
  cruisine: "Japanese",
  dishType: "Dish",
  image: "./images/ramen.jpg",
  duration: 30,
  creator: "Allison"
})
  .then(recipe => console.log(`${recipe.title} was added!`))
  .catch(err => console.log(err));

Recipe.updateOne({ title: "Rigatoni alla Genovese" }, { duration: 100 })
  .then(recipe => console.log(`Success! The duration is now ${recipe.duration}`))
  .catch(err => console.log(err));

Recipe.deleteOne({ title: "Carrot Cake" })
  .then(recipe => console.log("You've successfully removed the item"))
  .catch(err => console.log(err));

setTimeout(_ => mongoose.disconnect(), 1500);
