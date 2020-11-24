import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-leslo-648dc.cloudfunctions.net/api' 
    // local
    // 'http://localhost:5001/leslo-648dc/us-central1/api'
     //The API (cloud function) URL
})

export default instance;


