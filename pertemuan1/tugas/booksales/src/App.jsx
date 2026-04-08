import { Routes, Route, Link } from "react-router-dom";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <div className="container">
        {/* HEADER */}
        <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-5 border-bottom">
        
          <div className="col-md-3 d-flex align-items-center">
            <a href="/" className="d-inline-flex align-items-center text-decoration-none text-dark">
              <i className="fa-solid fa-book fa-xl me-2" style={{ color: "#74C0FC" }}></i>
              <span className="fs-4 fw-semibold" style={{ color: "#74C0FC" }}>HonMegane</span>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><Link to="/" className="nav-link px-3 text-dark fw-medium">Home</Link></li>
            <li><Link to="/" className="nav-link px-3 text-dark fw-medium">Features</Link></li>
            <li><Link to="/team" className="nav-link px-3 text-dark fw-medium">Team</Link></li>
            <li><Link to="/contact" className="nav-link px-3 text-dark fw-medium">Contact</Link></li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">
              Login
            </button>
            <button type="button" className="btn btn-primary">
              Register
            </button>
          </div>

        </header>

        {/* ROUTING */}
        <Routes>

          {/* HOME */}
          <Route path="/" element={
            <>

        {/* HERO */}

        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-4 border shadow-lg">
          <div className="col-lg-7">
            <h1 className="display-5 fw-bold lh-1 text-body-emphasis mb-3">
              Atomic Habits: Perubahan kecil yang memberikan hasil yang luar biasa
            </h1>

              <p className="fs-5 text-muted mb-4">
                Buku karya James Clear yang mengajarkan bagaimana perubahan kecil
                dapat memberikan dampak besar dalam hidup. Cocok untuk kamu yang
                ingin membangun kebiasaan positif dan meningkatkan produktivitas.
              </p>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                Buy Now
              </button>

              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Details
              </button>
            </div>
          </div>

          <div className="col-lg-4 p-0 overflow-hidden shadow-lg  m-4 mt-lg-0">
            <img
              className="img-fluid rounded-4"
              src="https://i.pinimg.com/736x/39/d9/d6/39d9d620d911c59cddd87302a2810bc3.jpg"
              alt="atomic-habits"
            />
          </div>

        </div>

      {/* Best Seller */}

      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="display-6 fw-semibold mb-3">Best Seller</h1>
            <p className="lead text-body-secondary mb-4">
              Koleksi buku terbaik pilihan pembaca yang bisa membantu meningkatkan
              wawasan dan kualitas hidupmu.
            </p>
            <p>
              <a href="/" className="btn btn-primary me-2 px-4">View</a>
              <a href="/" className="btn btn-outline-secondary px-4">Other Books</a>
            </p>
          </div>
        </div>
      </section>

      {/* Produk List */}
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

            {/* CARD */}
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
                    />

                <div className="card-body d-flex flex-column">
                  <h5 className="fw-bold mb-2">{book.title}</h5>
                  <p className="card-text text-muted mb-2">
                    {book.summary}
                  </p>

                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div className="btn-group my-2">
                      <button className="btn btn-sm btn-outline-primary me-2">Buy</button>
                      <button className="btn btn-sm btn-outline-secondary">Detail</button>
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
          } />

          {/* HALAMAN LAIN */}
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>

      {/* Footer */}
      <div className="container">
        <footer className="py-3 my-4">
          
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Features
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Teams
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                
              </a>
            </li>

          </ul>

          <p className="text-center text-body-secondary">
            &copy; 2026 NF Academy
          </p>

        </footer>
      </div>
      </div>
    </>
  );
}

export default App;