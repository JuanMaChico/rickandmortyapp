import Request from '../Utils/request';
import { URL_BASE } from '../Utils/Constants';

export const getEpisodes = async (param, callback) => {
	const result = await Request.get(`${URL_BASE}/episode/${param}`);
	callback(result);
};

export const getPages = async (param, callback) => {
	const result = await Request.get(`${URL_BASE}/character?page=${param}`);
	callback(result);
};
