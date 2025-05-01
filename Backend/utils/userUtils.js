import fs from "fs";
import path from "path";

const userPath = ("E:\/Projects\/ChitChat\/Backend\/data\/users.json");
let user = {
    username: "Puneeth2",
    email: "rspuneeth2@gmail.com",
    password: "Puni2@2003",
};

const readUsers = () => {
    try {
        const data = fs.readFileSync(userPath, "utf-8");
        return JSON.parse(data) || [];
    } catch (error) {
        return [];
    }
};

const saveNewUser = (user)=>{
    try {
        fs.writeFileSync(userPath,JSON.stringify(user,null,2))
        return "saved sucessfully"
    } catch (error) {
        return error
    }
}

const addNewUser = (user)=>{
    try {
        let users = readUsers();
        users.push(user);
        const message = saveNewUser(users)
        return (message)
    } catch (error) {
        return error
    }
}


export {addNewUser, readUsers, saveNewUser};
