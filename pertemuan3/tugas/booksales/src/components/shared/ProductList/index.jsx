import { Link } from "react-router-dom";

export default function ProductList() {
  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="display-6 fw-semibold mb-3">Best Seller</h1>
            <p className="lead text-body-secondary mb-4">
              Koleksi buku terbaik pilihan pembaca yang bisa membantu meningkatkan
              wawasan dan kualitas hidupmu.
            </p>
            <p>
              <Link to="/" className="btn btn-primary me-2 px-4">View</Link>
              <Link to="/books" className="btn btn-outline-secondary px-4">Other Books</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Produk List */}
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {[
              {
                title: "Atomic Habits",
                img: "https://i.pinimg.com/736x/39/d9/d6/39d9d620d911c59cddd87302a2810bc3.jpg",
                summary: "Perubahan kecil yang konsisten dapat menghasilkan dampak besar dalam hidup."
              },
              {
                title: "Rich Dad Poor Dad",
                img: "https://i.pinimg.com/736x/a1/5c/96/a15c961fc22449b3368150422c8ca13e.jpg",
                summary: "Pelajaran penting tentang mindset keuangan dan cara membangun aset."
              },
              {
                title: "The Psychology of Money",
                img: "https://i.pinimg.com/736x/14/d3/2c/14d32c47ff0259b1dd5f6cba4a653c2b.jpg",
                summary: "Mengungkap perilaku manusia dalam mengelola uang dan keputusan finansial."
              },
              {
                title: "Filosofi Teras",
                img: "https://i.pinimg.com/736x/98/57/93/985793dace849cf88ae75c463e150a77.jpg",
                summary: "Cara berpikir tenang menghadapi masalah dengan filosofi Stoik."
              },
              {
                title: "Madilog",
                img: "https://i.pinimg.com/736x/4d/d3/58/4dd358348d18e1c6f4fdfcd9effc19af.jpg",
                summary: "Pemikiran kritis Tan Malaka tentang materialisme, dialektika, dan logika."
              },
              {
                title: "Ronggeng Dukuh Paruk",
                img: "https://i.pinimg.com/736x/32/11/14/3211145ea410e62210e030e61e436e64.jpg",
                summary: "Kisah budaya dan cinta di desa dengan konflik sosial yang kuat."
              }
            ].map((book, index) => (
              <div className="col" key={index}>
                <div className="card shadow-sm">
                  <img
                    src={book.img}
                    className="card-img-top"
                    style={{ height: "250px", objectFit: "cover" }}
                    alt={book.title}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="fw-bold mb-2">{book.title}</h5>
                    <p className="card-text text-muted mb-2">{book.summary}</p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <div className="btn-group my-2">
                        <Link to="/" className="btn btn-sm btn-outline-primary me-2">Buy</Link>
                        <Link to={`/book/${index + 1}`} className="btn btn-sm btn-outline-secondary">Detail</Link>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}