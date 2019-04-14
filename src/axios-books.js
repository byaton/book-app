import axios from 'axios';

const dataInteractionInstance = axios.create({
    baseURL: 'https://book-store-dd7c7.firebaseio.com/'
});

export default dataInteractionInstance;