export default function Hero() {
    return(
        <>
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
        </>
    );
}