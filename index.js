const { Client } = require('pg');

const client = new Client({
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
});

// Get last day function

// Return json data array for the last 24 hours
exports.getLastDay = async function (req, res) {
	await client.connect();
	const result = await client.query('SELECT id, mesurment_date, light, temperature, pressure FROM sensor_data WHERE mesurment_date >= NOW() - \'1 day\'::INTERVAL;');
	console.log(result);
	res.status(200).send(result.rows);
	await client.end();
};

// Insert function

// Data scheme :
/* {
	"pressure": random.randrange(1006, 1012),
	"temperature": random.randrange(-12, 36),
	"light": random.randrange(100, 500),
} */
exports.insert = async function (req, res) {
	// Validate the json body of the request
	if (!req.body) {
		res.status(400).send('Bad request');
		return;
	}
	if (!req.body.light || !req.body.temperature || !req.body.pressure) {
		res.status(400).send('Bad request\nMissing parameters\n\n' + JSON.stringify(req.body));
		return;
	}

	// Connect to the database and send data to it
	await client.connect();
	const result = await client.query('INSERT INTO sensor_data (light, temperature, pressure) VALUES ($1, $2, $3);', [req.body.light, req.body.temperature, req.body.pressure]);
	console.log(result);
	res.status(200).send('Data sent:\nLight: ' + req.body.light + '\nTemperature: ' + req.body.temperature + '\nPressure: ' + req.body.pressure);
	await client.end();
};