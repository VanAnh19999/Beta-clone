import { fetchWrapper } from './http_service'

export const authService = {
    register , getLoginInfo , getLogin
}

function register (payload) {
    return fetchWrapper.post('users' , null , payload)
}

function getLoginInfo (email){
    return fetchWrapper.get('users' , {
        email : email
    });
}

function getLogin(email , password) {
    return fetchWrapper.get('users' , {
        email : email,
        password : password
    });
}