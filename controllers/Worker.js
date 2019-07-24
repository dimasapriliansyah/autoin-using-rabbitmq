const { validationResult } = require('express-validator');

const test = (req, res, next) => {
	res.send('Reached worker routes');
};

const subscribe = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}
	res.send('subcribe');
};

module.exports = { test, subscribe };
