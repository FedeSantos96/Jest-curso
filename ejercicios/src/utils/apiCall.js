import axios from 'axios';

export const sendData = () => {
    return axios.post("example/save").then(() => {
        console.log("success")
    }).catch((error) => {
        console.log("error")
    } )
}