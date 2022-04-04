export function authHeader() {
    let user = localStorage.getItem('fc_jwt_token');

    if (user && user.authdata) {
        return { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user.authdata };
    } else {
        return {};
    }
}