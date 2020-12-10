async function loadData(url) {
	const response = await fetch(url);
	return response.json();
}

export default loadData;
