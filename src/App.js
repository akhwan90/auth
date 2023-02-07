import { Routes, Route, BrowserRouter, Navigate, Outlet } from "react-router-dom";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/admin/Dashboard";
import UserProfile from "./pages/admin/UserProfile";

import Header from "./components/Header";

export default function App() {
	return (
		<BrowserRouter>
			{/* <Header/> */}
			<Routes>
				<Route path="/" element={<LandingPage/>}/>
				<Route element={<PrivateOutlet/>}>
					<Route path="/admin" element={<Dashboard/>}/>
					<Route path="/user-profile" element={<UserProfile/>}/>
				</Route>
				<Route path="/login" element={<Login/>}/>
			</Routes>
		</BrowserRouter>
	);
}


function PrivateOutlet() {
	const auth = useAuth();
	return auth ? <Outlet/> : <Navigate to="/login"/>;
}

function useAuth() {
	let isLogged = (
		localStorage.getItem("isLogged") == null || 
		localStorage.getItem('isLogged') == 'false'
	) ? false : true;
	
	return isLogged;
}
