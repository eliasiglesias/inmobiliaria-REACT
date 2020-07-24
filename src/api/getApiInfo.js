const URL = "https://hub-inmobiliaria.netlify.app/inmuebles.json";

const getApiInfo = async () => {
	const response = await fetch(URL);
	const data = await response.json();
	return data;
};

export default getApiInfo;
