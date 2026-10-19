import axios from 'axios';


const API =axios.create({
    baseURL:"https://api.rawg.io/api",

    params: {
        
        key:"6d0f7bb05b05482a82cf6b351399df78"
    }
})
export default API; 