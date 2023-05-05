const router = require("express").Router();
const { Book } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newBook = await Book.create({
      ...req.body,
    });

    res.status(200).json(newBook);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const books = await Book.findAll();

    res.status(200).json(books);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);

    if (!book) {
      res.status(404).json({ message: "No book found with this id!" });
      return;
    }

    res.status(200).json(book);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const book = await Book.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!book[0]) {
      res.status(404).json({ message: "No book found with this id!" });
      return;
    }

    res.status(200).json({ message: "Book updated successfully!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a book by ID
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const book = await Book.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!book) {
      res.status(404).json({ message: "No book found with this id!" });
      return;
    }

    res.status(200).json({ message: "Book deleted successfully!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
