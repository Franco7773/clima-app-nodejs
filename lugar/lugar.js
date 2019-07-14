const axios = require('axios');


const getLugarLatLng = async ( dir ) => {

	let encodedUrl = encodeURI( dir );

	const INSTANCE = axios.create({
		baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl }`,
		headers: {
				'X-RapidAPI-Host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
				'X-RapidAPI-Key': 'fbdaae1d6cmsh68f904a11c4a3c6p173759jsn17a9f030c4e6'
			}
	});
	
	const RESP = await INSTANCE.get();

	if ( RESP.data.Results.length === 0) {
		throw new Error(`No existen Resultados para ${ dir }`);
	}

	const DATA = RESP.data.Results[0];

	let direccion = DATA.name; 
	let lat = DATA.lat; 
	let lng = DATA.lon; 
	
	return {
		direccion,
		lat,
		lng
	}
}

module.exports = {
	getLugarLatLng
};
