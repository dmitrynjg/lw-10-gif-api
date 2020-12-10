import storeApp from '../store';

async function search(value, callback = null) {
	if (value !== undefined || value !== '') {
		storeApp.isLoad = true;
		storeApp.offset = 0;
		storeApp.gifList = [];
		if (typeof callback === 'function') {
			await callback();
		}
	}
}

export default search;
