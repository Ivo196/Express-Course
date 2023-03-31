const express = require("express");
const app = express.Router();
const axios = require("axios");

app.get("/", (req, res) => {
  let isActive = true;

  const users = [
    {
      id: 1,
      name: "Ivo",
      lastname: "Tonioni",
    },
    {
      id: 2,
      name: "Sahid",
      lastname: "Figueroa",
    },
  ];

  res.render("index.ejs", {
    title: "Index Page",
    isActive,
    users,
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

app.get("/posts", async (req, res) => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  console.log(response)
  res.render("posts",{
    posts: response.data
  });
});
module.exports = app;
