const onSubscribe = {
	agentId: {
		in: [ 'body' ],
		exists: {
			checkNull: true,
			checkFalsy: true,
			errorMessage: 'agentId key not exists.'
		},
		isEmpty: {
			negated: true,
			errorMessage: 'agentId cannot be empty.'
		}
	},
	channelId: {
		in: [ 'body' ],
		exists: {
			checkNull: true,
			checkFalsy: true,
			errorMessage: 'channelId key not exists.'
		},
		custom: {
			options: (value, { req, location, path }) => {
				if (value.length !== undefined) {
					const isEmptyArray = value.length >= 1 ? true : false;
					return isEmptyArray;
				}
			},
			errorMessage: 'channelId array is empty.'
		}
	},
	tenant: {
		in: [ 'body' ],
		exists: {
			checkNull: true,
			checkFalsy: true,
			errorMessage: 'tenant key not exists.'
		}
	}
};

module.exports = { onSubscribe };
