    import { Link } from "react-router-dom";

    export default function Footer() {
    return (
        <>
        <div className="container">
            <footer className="py-3 my-4">
            
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                
                <li className="nav-item">
                <Link to="/" className="nav-link px-2 text-body-secondary">
                    Home
                </Link>
                </li>

                <li className="nav-item">
                <Link to="/Books" className="nav-link px-2 text-body-secondary">
                    Books
                </Link>
                </li>

                <li className="nav-item">
                <Link to="/Team" className="nav-link px-2 text-body-secondary">
                    Teams
                </Link>
                </li>

                <li className="nav-item">
                <Link to="/Contact" className="nav-link px-2 text-body-secondary">
                    Contact
                </Link>
                </li>

            </ul>

            <p className="text-center text-body-secondary">
                &copy; 2026 NF Academy
            </p>

            </footer>
        </div>
        </>
    );
    }