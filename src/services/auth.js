import request from "../helpers/axios";

function login(email, password) {
    return request({
        url: '/login',
        method: 'POST',
        data: {
            email: email, 
            password: password
        }
    });
}

const AuthService = {
    login
}

export default AuthService;