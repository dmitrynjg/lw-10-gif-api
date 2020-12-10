import loadData from '../api';
import storeApp from '../store';

function splitColumn(data, countColumn = 3) {
	if (Array.isArray(data)) {
		data.forEach((element, index) => {
			const columnNum = index % countColumn;
			if (!Array.isArray(storeApp.gifList[columnNum])) {
				storeApp.gifList[columnNum] = [];
			}

			storeApp.gifList[columnNum].push(
				{
					...element,
					id: storeApp.gifList[columnNum].length > 0
						? storeApp.gifList[columnNum][storeApp.gifList[columnNum].length - 1].id + 1
						: 1,
				},
			);
		});
	}
}

const loadGif = async (query) => {
	const apiHost = `https://api.giphy.com/v1/gifs/search?api_key=
	${process.env.REACT_APP_API_KEY}&q=${query}&limit=${storeApp.limit}&offset=${storeApp.offset}`;
	await loadData(
		apiHost,
	).then((res) => {
		if (res.meta.status === 200) {
			// storeApp.gifList.concat(res.data);

			splitColumn(res.data);
			storeApp.offset += storeApp.limit;
		}
	});
};

export default loadGif;
