import axios from "axios";
import jwtDecode from "jwt-decode";

export const registration = async (name, surname, email, password,) => {
    const {data} = await axios.post(`http://localhost:5000/api/registration`, {name, surname, email, password})
    console.log(data)
    return data
}

export const login = async (email, password) => {
    const {data} = await axios.post(`http://localhost:5000/api/login`, {email, password})
    console.log(data)
    return jwtDecode(data)
}


