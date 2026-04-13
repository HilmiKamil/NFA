    import { Link } from "react-router-dom";

    export default function Header() {
    const styles = {
        header: {
            background: "#ffffff",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        },

        logo: {
            color: "#3A86FF",
            fontWeight: "700",
        },

        navLink: {
            color: "#333",
            padding: "8px 14px",
            borderRadius: "8px",
            textDecoration: "none",
        },

        buttonLogin: {
            padding: "8px 16px",
            border: "1px solid #3A86FF",
            background: "white",
            color: "#3A86FF",
            borderRadius: "8px",
            marginRight: "8px",
        },

        buttonRegister: {
            padding: "8px 16px",
            background: "#3A86FF",
            color: "white",
            border: "none",
            borderRadius: "8px",
        },
    };

    return (
        <header
        style={styles.header}
        className="d-flex flex-wrap align-items-center justify-content-between py-3 px-4 mb-4"
        >
        {/* Logo */}
        <div className="col-md-3 d-flex align-items-center">
            <Link to="/" className="d-inline-flex align-items-center text-decoration-none" style={styles.logo} >
            <i className="fa-solid fa-book fa-xl me-2"></i>
            <span className="fs-4">HonMegane</span>
            </Link>
        </div>

        {/* Navigation */}
        <ul className="nav col-12 col-md-auto justify-content-center">
            <li><Link to="/" style={styles.navLink}>Home</Link></li>
            <li><Link to="/Books" style={styles.navLink}>Book</Link></li>
            <li><Link to="/Team" style={styles.navLink}>Team</Link></li>
            <li><Link to="/Contact" style={styles.navLink}>Contact</Link></li>
        </ul>

        {/* Button */}
        <div className="col-md-3 text-end">
            <Link to="/login">
            <button style={styles.buttonLogin}>Login</button>
            </Link>
            <Link to="/register">
            <button style={styles.buttonRegister}>Register</button>
            </Link>
        </div>
        </header>
    );
    }