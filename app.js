const ARGV = require('./argv').ARGV;
const LUGAR = require('./lugar/lugar');
const CLIMA = require('./clima/clima');

// ARGV.direccion
const getInfo = async (direccion) => {
	
	try {
		let coords = await LUGAR.getLugarLatLng(direccion);
		let temp = await CLIMA.getClima(coords.lat, coords.lng);

		return `El Clima de ${coords.direccion} es de ${temp}.`;
	} catch {

		throw new Error(`No se pudo determinar el clima de ${direccion}.`);
	}
}

getInfo(ARGV.direccion)
			 .then(console.log)
			 .catch(console.error);
