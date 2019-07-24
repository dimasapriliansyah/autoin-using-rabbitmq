const { validationResult } = require('express-validator');

const response = require('../libs/responseObject');

const test = (req, res, next) => {
	res.send('Reached worker routes');
};

const subscribe = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json(response(false, errors.array(), req.body));
	}

	// Checking if the user keys exists:
	// True -> check the limit of current user;
	// Register the user with prefetch based on existing limit and request limit;

	// True -> User already registered;
	// False ->

	res.send('subcribe');
};

module.exports = { test, subscribe };
