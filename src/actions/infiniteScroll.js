async function infiniteScrollHandler(event, callback) {
	if (event.target.scrollHeight - event.target.scrollTop <= event.target.clientHeight + 1) {
		if (typeof callback === 'function') {
			await callback();
		}
	}
}

export default infiniteScrollHandler;
