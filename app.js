import express from "express";

import { html } from "./config.js";

import recipesRouter from "./router/recipes.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

/* DO NOT CHANGE THIS ROUTE - it serves our front-end */
app.get("/", function (req, res) {
  res.sendFile(html);
});

app.use("/recipes", recipesRouter)

app.use("/recipes/<recipe_id>", recipesRouter)

app.use(express.json())

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
