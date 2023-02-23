function responseValidator(response) {
	const { status } = response;
	if (status && [200, 201].includes(status)) {
		return response;
	} else if (status && [400, 401, 402, 403, 404, 500, 501].includes(status)) {
		throw new Error(`Response error code: ${status}`);
	} else {
		throw new Error('Response error. No Error status.');
	}
}

export default responseValidator;
