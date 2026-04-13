// src/pages/Books/index.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import booksData from "../../../assets/Utils/books";

function BookCard({ book }) {
  return (
    <div className="col">
      <div className="card shadow-sm h-100">
        <img
          src={book.image}
          className="card-img-top"
          style={{ height: "250px", objectFit: "cover" }}
          alt={book.title}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="fw-bold mb-2">{book.title}</h5>
          <p className="text-muted mb-1">
            <strong>Penulis:</strong> {book.author}
          </p>
          <p className="text-muted mb-1">
            <strong>Tahun:</strong> {book.year}
          </p>
          <p className="card-text text-muted mb-2">{book.description}</p>
          <div className="d-flex justify-content-between align-items-center mt-auto">
            <div>
              <Link to={`/book/${book.id}`} className="btn btn-primary me-2 px-4">
                View
              </Link>
              <Link to="/books" className="btn btn-outline-secondary px-4">
                Other Books
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CollectionBook() {
  const [books, setBooks] = useState(booksData);

  const addNewBook = () => {
    const newBook = {
      id: books.length + 1,
      title: `Buku Baru #${books.length + 1}`,
      author: "Penulis Dinamis",
      year: new Date().getFullYear(),
      description: "New Book.",
      image: "https://picsum.photos/id/100/200/300"
    };
    setBooks([...books, newBook]);
    alert(`Buku "${newBook.title}" berhasil ditambahkan!`);
  };

  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-3">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="display-6 fw-semibold mb-3">Our Collection Books</h1>
            <p className="lead text-body-secondary mb-4">
              Temukan berbagai buku inspiratif untuk mengembangkan diri Anda.
            </p>
            <button className="btn btn-primary btn-lg px-5" onClick={addNewBook}>
              + Tambah Buku Baru
            </button>
          </div>
        </div>
      </section>

      <div className="album py-4 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}