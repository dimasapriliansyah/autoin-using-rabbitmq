const response = (isSuccess, message, data) => {
	return {
		isSuccess,
		message,
		data
	};
};

module.exports = response;
