import axios from "axios";

export default axios.create({
    baseURL: import.meta.env.VITE_GAMES_APIURL,
    params:{
        key: import.meta.env.VITE_GAMES_APIKEY
    }
})