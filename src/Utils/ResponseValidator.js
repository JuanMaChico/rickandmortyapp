function responseValidator(response) {
	const { code } = response;
	if (code && [200, 201].includes(code)) {
		return response;
	} else if (code && [400, 401, 402, 403, 404, 500, 501].includes(code)) {
		return false;
	} else {
		throw new Error('Response error. No Error Code.');
	}
}

export default responseValidator;
