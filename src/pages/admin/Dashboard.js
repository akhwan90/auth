import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Aside from "../../components/Aside";
import Content from "../../components/Content";
import Navbar from "../../components/Navbar";

const Dashboard = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState(localStorage.getItem('username'));

    function handleLogout(event) {
        event.preventDefault();
        localStorage.setItem('isLogged', 'false');
        localStorage.setItem('username', '');
        localStorage.setItem('token', '');
        localStorage.setItem('userId', '');
        localStorage.setItem('nama', '');
        navigate('/login')
    }

    return (
        <div>
            <Navbar/>
            <div className="flex overflow-hidden bg-white pt-16">
                <Aside/>
                <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
                <Content/>
            </div>
        </div>
    );
}

export default Dashboard;