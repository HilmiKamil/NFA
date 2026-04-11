import { Link } from "react-router-dom";

export default function Header() {
    return(
        <>
            <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-5 border-bottom">
            
            <div className="col-md-3 d-flex align-items-center">
                <Link to="/" className="d-inline-flex align-items-center text-decoration-none text-dark">
                <i className="fa-solid fa-book fa-xl me-2" style={{ color: "#74C0FC" }}></i>
                <span className="fs-4 fw-semibold" style={{ color: "#74C0FC" }}>HonMegane</span>
                </Link>
            </div>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><Link to="/" className="nav-link px-3 text-dark fw-medium">Home</Link></li>
                <li><Link to="/Books" className="nav-link px-3 text-dark fw-medium">Book</Link></li>
                <li><Link to="/Team" className="nav-link px-3 text-dark fw-medium">Team</Link></li>
                <li><Link to="/Contact" className="nav-link px-3 text-dark fw-medium">Contact</Link></li>
            </ul>

            <div className="col-md-3 text-end">
                <Link to={"/login"}>
                    <button type="button" className="btn btn-outline-primary me-2">
                    Login
                    </button>
                </Link>
                <Link to={"/register"}>
                    <button type="button" className="btn btn-primary">
                    Register
                    </button>
                </Link>

            </div>

            </header>
        
        </>
    );
}