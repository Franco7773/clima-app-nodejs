const axios = require('axios');

const getClima = async (lat, lng) => {

	const RESP = await axios.get(`
	https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0b8023f8479d5d69a8aa9c2fdf47a4bc&units=metric
	`);

	return RESP.data.main.temp;
}

module.exports = {
	getClima
}