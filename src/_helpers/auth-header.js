export function authHeader() {
    let user = localStorage.getItem('fc_jwt_token');
    if (user != null) {
        return { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user };
    } else {
        return {};
    }
}