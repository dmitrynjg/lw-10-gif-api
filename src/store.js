const { store } = require('@risingstack/react-easy-state');

const storeApp = store({
	offset: 0,
	limit: 16,
	gifList: [],
	searchValue: 'test',
	isLoad: false,
});

export default storeApp;
