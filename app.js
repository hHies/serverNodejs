const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const app = express();

app.use(express.json({ extended: true }));

app.use("/", require("./routes/main.routes"));
app.use("/api/editor", require("./routes/editor.routes"));

const PORT = config.get("port") || 4000;

async function start() {
  try {
    await mongoose.connect(config.get("mongoUrl"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () => {
      console.log(`SERVER start on ${PORT}`);
    });
  } catch (e) {
    console.log("[Server Error]", e.message);
    process.exit(1);
  }
}

start();
