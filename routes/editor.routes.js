const { Router } = require("express");
const Editor = require("../models/Editor");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const editor = await Editor.find();
    res.json(editor);
  } catch (error) {
    res.status(500).json({ message: "Что не так с get запросом" });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;

    const editor = new Editor({
      data: JSON.stringify(data),
      date: new Date(),
    });

    await editor.save();

    res.status(201).json({ data });
  } catch (error) {
    res.status(500).json({ message: "Что не так с post запросом" });
  }
});

router.post("/:id", async (req, res) => {
  try {
    const data = req.body;

    const editor = await Editor.findById({ _id: req.params.id });

    editor.data = JSON.stringify(data);
    editor.date = new Date();

    await editor.save();

    res.status(201).json({ editor });
  } catch (error) {
    res.status(500).json({ message: "Что не так с post запросом" });
  }
});

module.exports = router;

//http://localhost:5000/api/editor/

//http://localhost:5000/api/editor/5f4effb159c8cc2c687bf3fc

// {
// 	"data": [{"type":"title",	"title":"Супер титл"},{"type":"text",	"text":"Супер титл"	}]
// }
