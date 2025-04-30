import fs from "fs";
import path from "path";

const userPath = path.join("../data/users.json");
let user = {
    username: "Puneeth2",
    email: "rspuneeth2@gmail.com",
    password: "Puni2@2003",
};

const readUsers = () => {
    try {
        const data = fs.readFileSync(userPath, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        return error.name;
    }
};

const saveNewUser = (user)=>{
    try {
        fs.writeFileSync(userPath,JSON.stringify(user,null,2))
    } catch (error) {
        return error
    }
}

const addNewUser = (user)=>{
    try {
        let users = readUsers();
        users.push(user);
        saveNewUser(users)
        return (`user added sucessfully`)
    } catch (error) {
        return error
    }
}

const adduser = addNewUser(user)
console.log(adduser);
