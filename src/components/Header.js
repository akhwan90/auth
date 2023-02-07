import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            {" | "}
            <Link to="/admin">Admin</Link>
            {" | "}
            <Link to="/user-profile">User Profile</Link>
        </nav>
    )
}

export default Header;