import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleLogin(event) {
        event.preventDefault();
        if (username == "admin" && password == "admin") {
            localStorage.setItem('isLogged', 'true');
            localStorage.setItem('username', username);
            alert("Selamat datang "+username);
            navigate('/admin')
        } else {
            alert("Login gagal");
        }
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
            <input type={'text'} value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Email"/><br/>
            <input type={'password'} value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/><br/>
            <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;