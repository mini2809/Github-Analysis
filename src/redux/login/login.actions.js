import { SAVE_LOGIN } from "./login.types";


export  const SaveLogin = () => {
    console.log("inside action savelogin");
    //const myHeaders = new Headers();

    //myHeaders.append("Access-Control-Allow-Origin", );
    // myHeaders.append("content-type","application/json");

    let requestOptions = {
        method: 'GET',
        //headers: myHeaders,
        redirect: 'follow'
    };

    fetch("http://localhost:8091/login").then(res=>console.log(res));
    return {
        type: SAVE_LOGIN,
        payload:{
            access_token:"1234567",
        }
    };
};
