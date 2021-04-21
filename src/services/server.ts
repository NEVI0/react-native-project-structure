import axios from 'axios';

const server = axios.create({
	baseURL: 'http://localhost:4500/api'
});

export default server;
