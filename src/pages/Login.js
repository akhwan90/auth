import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleLogin(event) {
        event.preventDefault();
        
        AuthService.login(username, password)
            .then((response) => {
                localStorage.setItem('isLogged', 'true');
                localStorage.setItem('username', response.user.email);
                localStorage.setItem('token', response.authorisation.token);
                localStorage.setItem('userId', response.user.id);
                localStorage.setItem('nama', response.user.name);
                navigate('/admin');
                // console.log(response);
            });

        /*
        if (username == "admin" && password == "admin") {
            localStorage.setItem('username', username);
            alert("Selamat datang "+username);
        } else {
            alert("Login gagal");
        }
        */
    }

    return (
        <div className="bg-gray-10">
            <div className="flex justify-center h-screen w-screen items-center">
                <form onSubmit={handleLogin} className="w-full md:w-1/4 flex flex-col items-center">
                    <div className="w-3/4 mb-6">
                        <input type={'text'} value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Email" className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"/><br/>
                    </div>
                    <div className="w-3/4 mb-6">
                        <input type={'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"/><br/>
                    </div>
                    <div className="w-3/4 mb-6">
                        <button type="submit" className="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;