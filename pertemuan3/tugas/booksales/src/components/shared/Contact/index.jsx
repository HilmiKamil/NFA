import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <main className="container px-4 py-5">

        {/* HEADER */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">Contact Us</h1>
          <p className="text-muted">
            Hubungi tim HonMegane untuk pertanyaan, saran, atau kerja sama.
          </p>
        </div>

        {/* CONTACT INFO */}
        <div className="row g-4 py-3 row-cols-1 row-cols-lg-3">

          <div className="col">
            <div className="feature p-4 border rounded text-center h-100">
              <div className="feature-icon text-bg-primary fs-2 mb-3 py-3"><i className="fa-solid fa-envelope"></i></div>
              <h3>Email</h3>
              <p className="text-muted">hubungi kami via email</p>
              <Link to="mailto:support@honmegane.com">support@honmegane.com</Link>
            </div>
          </div>

          <div className="col">
            <div className="feature p-4 border rounded text-center h-100">
              <div className="feature-icon text-bg-primary fs-2 mb-3 py-3"><i className="fa-solid fa-phone"></i></div>
              <h3>Phone</h3>
              <p className="text-muted">layanan telepon</p>
              <Link to="tel:+62822777666">+62 822 777 666</Link>
            </div>
          </div>

          <div className="col">
            <div className="feature p-4 border rounded text-center h-100">
              <div className="feature-icon text-bg-primary fs-2 mb-3 py-3"><i className="fa-solid fa-location-dot"></i></div>
              <h3>Address</h3>
              <p className="text-muted">lokasi kantor kami</p>
              <Link to="https://maps.google.com/?q=Depok,Indonesia" target="_blank" rel="noopener noreferrer">Depok, Indonesia</Link>
            </div>
          </div>

        </div>

      </main>
    </>
  );
}