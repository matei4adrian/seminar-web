const express = require("express");
const app = express();
const port = 3000;
const Book = require("./Book");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const bookRouter = express.Router();
app.use("/api", bookRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.listen(port, () => {
  console.log("Running on port " + port);
});

let books = [
  new Book(1, "Dune", "sf", "Frank Herbert"),
  new Book(2, "Robinson Crusoe", "adventures", "Daniel Defoe"),
  new Book(3, "Foundation", "sf", "Asimov"),
];

// app.get("/books", (req, res) => {
//   let filteredBooks = [];
//   if (req.query.genre) {
//     filteredBooks = books.filter((x) => x.genre == req.query.genre);
//   } else {
//     filteredBooks = books;
//   }
//   res.json(filteredBooks);
// });

bookRouter
  .route("/books")
  .get((req, res) => {
    const sortOrder = req.query.sortOrder ? parseInt(req.query.sortOrder) : 1;
    if (req.query.sortField) {
      const sortField = req.query.sortField;
      const sortedBooks = books.sort((first, second) => {
        if (first[sortField] < second[sortField]) {
          return 0;
        } else {
          if (first[sortField] > second[sortField]) {
            return 1 * sortOrder;
          } else {
            return -1 * sortOrder;
          }
        }
      });
      res.status(200).json(sortedBooks);
    } else {
      res.status(200).json(books);
    }
  })
  .post((req, res) => {
    try {
      const book = req.body;
      if (typeof book.name === "string" && book.name.length > 3) {
        books.push(book);
      } else {
        throw new Error("title is invalid");
      }

      res.status(201).json({ message: "book added" });
    } catch (err) {
      console.warn(err);
      res.status(500).json({ message: err.message });
    }
  });

bookRouter
  .route("/books/:bookId")
  .put((req, res) => {
    let bookModif = books.find((x) => x.id == req.params.bookId);
    bookModif.name = req.body.name;
    bookModif.genre = req.body.genre;
    bookModif.author = req.body.author;
    return res.status(200).json(bookModif);
  })
  .delete((req, res) => {
    let deletedBook = books.find((x) => x.id == req.params.bookId);
    books = books.filter((x) => x.id != deletedBook.id);
    return res.status(200).json(deletedBook);
  });

// app.post("/addBooks", (req, res) => {
//   let newBook = new Book(
//     req.body.id,
//     req.body.name,
//     req.body.genre,
//     req.body.author
//   );
//   books.push(newBook);
//   console.log(books);
//   return res.status(200).json(newBook);
// });
