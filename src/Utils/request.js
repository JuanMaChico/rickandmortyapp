import responseValidator from './ResponseValidator';

const get = async (url) => {
	try {
		let result = await fetch(url);
		result = responseValidator(result);
		return await result.json();
	} catch (error) {
		console.log(error);
		return {
			error: error,
			message: 'Error trying to fetch url',
		};
	}
};

export default {
	get,
};
