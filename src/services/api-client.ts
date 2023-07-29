import axios from 'axios';

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'eb54e7bc207d41b6954fe49b8144d17e'
    }
})