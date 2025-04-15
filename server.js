require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const userRoutes = require("./src/routes/usersRoutes");
const postRoutes = require("./src/routes/postRoutes"); 

const app = express();

const setupSwagger = require('./src/config/swagger.js'); // Caminho até o arquivo
setupSwagger(app);

app.use(cors());
app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/posts", postRoutes); 

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/docs", express.static("docs"));

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Eu amo BackEnd");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});