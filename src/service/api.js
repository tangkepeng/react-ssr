import express from 'express'
import sendJSON from '../libs/middleware/sendJSON'
import configuration from '../configuration/serverConfiguration.json'

const api = express();

api.use(sendJSON);

api.get('/configuration', (req, res)=> {
	res.success(configuration);
});

export default api;