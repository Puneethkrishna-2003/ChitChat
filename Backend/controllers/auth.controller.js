import { addNewUser } from "../utils/userUtils.js";
export const signup = (req, res) => {
    const { username, email, password, confirmpassword } = req.body;

    if (!username || !email || !password || !confirmpassword)
        return res.send("All fields required");

    const vaildEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!vaildEmail.test(email)) return res.send("email is not valid");

    if (password !== confirmpassword)
        return res.send("Passwords do not match!");

    const newUser = addNewUser({
        username: `${username}`,
        email: `${email}`,
        password: `${password}`,
        createdTime: `${new Date().toString()}`
    });
    res.json({
        success: `${newUser}`,
    });
};
export const login = (req, res) => {
    res.send("login");
};

export const logout = (req, res) => {
    res.send("logout");
};
