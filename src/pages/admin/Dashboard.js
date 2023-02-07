import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState(localStorage.getItem('username'));

    function handleLogout(event) {
        event.preventDefault();
        localStorage.setItem('isLogged', 'false');
        localStorage.setItem('username', '');
        navigate('/login')
    }

    return (
        <div>
            <h5>Halaman dashboard : {username}</h5>
            <a href="#" onClick={handleLogout}>Logout</a>
        </div>
    );
}

export default Dashboard;