import axios from 'axios';

export const getInitialState = () => {
    axios.get("example/initial").then((response) => {
        switch(response.code) {
            case 200:
                console.log("success");
                break;
            case 301:
                console.log("redirect");
                break;
            default:
                console.log("internal error");
                break;

        }
    }).catch((error) => {
        switch(error.code) {
            case 404:
                console.log("not-found");
                break;
            case 401:
                console.log("no autorized");
                break;
            default:
                console.log("error 500");
                break;

        }
    })
}