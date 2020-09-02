const { Router } = require("express");
const router = Router();

router.get("/", async (req, res) => {
  try {
    res.json("<h1>hello</h1>");
  } catch (error) {
    res.status(500).json({ message: "Что-то не так с get запросом" });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;

    res.status(201).json({ data });
  } catch (error) {
    res.status(500).json({ message: "Что-то не так с post запросом" });
  }
});

module.exports = router;
