import jwt from 'jsonwebtoken';

export function UserIsValid(token) {
    console.log("the token is " + token.user);
    if (token.isAuthenticated) {
        var decodedToken = jwt.decode(token.user);
        var dateNow = new Date();
        if (decodedToken.exp > dateNow.getTime() / 1000) return true;
        else return false;
    }
    return false;
}
