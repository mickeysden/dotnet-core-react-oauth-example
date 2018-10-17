export function login(token) {
    return dispath => {
        dispath({
            type: "LOGIN",
            payload: token
        });
    }
}

export function logout() {
    console.log("Logging out");
    return dispath => {
        dispath({
            type: "LOGOUT",
            payload: ""
        });
    };
}