const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const recursosRoutes = require("./routes/recursos.routes")
const authRoutes = require("./routes/auth.routes");

app.use("/auth", authRoutes);
app.use("/recursos", recursosRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});