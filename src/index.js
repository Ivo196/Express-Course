const express = require("express");
const path = require("path");

const app = express();

// app.get("/", (req, res) => {
//   res.sendFile("./static/index.html", {
//     root: __dirname,
//   });
// });

// app.get("/", (req, res) => {
//   res.send("Hola");
// });

// app.get("/about", (req, res) => {
//   res.send("About");
// });

// app.get("/weather", (req, res) => {
//   res.send("Weather");
// });

// app.use((req, res) => {
//   res.send("No se encontro tu pagina");
// });

// app.get("/products", (req, res) => {
//   res.send("Lista de Productos");
// });

// app.post("/products", (req, res) => {
//   res.send("Creando productos");
// });

// app.put("/products", (req, res) => {
//   res.send("Actualizando productos");
// });

// app.delete("/products", (req, res) => {
//   res.send("Eliminado productos");
// });

// app.patch("/products", (req, res) => {
//   res.send("Actualiznado una parte del producto");
// });

// app.get("/miarchivo", (req, res) => {
//   res.sendFile("./JS Imagen.png", {
//     root: __dirname,
//   });
// });

// app.get("/user", (req, res) => {
//   res.json({
//     Name: "Ivo",
//     lastName: "Tonioni",
//     age: 40,
//     points: [1, 2, 3],
//     address: {
//       city: "NY",
//       street: "Some street 123",
//     },
//   });
// });

// app.get('/isAlive', (req,res) =>{
//   res.sendStatus(204)
// })

// app.use(express.text());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.post("/user", (req, res) => {
//   console.log(req.body);
//   res.send("Nuevo usuario creado");
// });

// app.get("/hello/:user", (req, res) => {
//   res.send(`Hola ${req.params.user}`);
//   console.log(req.params.user);
// });

// app.get("/add/:x/:y", (req, res) => {
//   res.send(`Result: ${parseInt(req.params.x) + parseInt(req.params.y)}`);
// });

// app.get("/users/:username/photo", (req, res) => {
//   if (req.params.username === "Ivo") {
//     res.sendFile("./JS Imagen.png", {
//       root: __dirname,
//     });
//   } else {
//     res.send("No se encontro el archivo");
//   }
// });

// app.get("/search", (req, res) => {
//   if (req.query.q === "JS") {
//     res.send("Lista JS");
//   } else {
//     res.send("Pagina Normal");
//   }
// });

// app.all('/info', (req,res) =>{
//   res.send('More info')
// })

// const morgan = require("morgan");

// app.use(morgan("dev"));

// app.use((req, res, next) => {
//   console.log("paso por aqui");
//   console.log(`Route:${req.url} Method:${req.method}`);
//   next();
// });

// app.use((req, res, next) => {
//   if (req.query.login === "ivo") {
//     next();
//   } else {
//     res.send("Incorrect User");
//   }
// });

// app.get("/profile", (req, res) => {
//   res.send("Profile Page");
// });
const UserName = require("./routes/users");
const HomeRouter = require("./routes/home");
const ejs = require("ejs");
const connectDB = require("./DB.js");

connectDB();

UserName(app);

app.set("appName", "Express Course");
app.set("port", 3000);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(HomeRouter);
app.use("/public", express.static(path.join(__dirname, "public")));

app.listen(app.get("port"));
console.log(`Server ${app.get("appName")} on port ${app.get("port")}`);
