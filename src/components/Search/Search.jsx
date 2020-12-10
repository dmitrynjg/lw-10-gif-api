import React from 'react';

import loadGif from '../../actions/giphyList';
import search from '../../actions/search';
import storeApp from '../../store';
import './Search.css';

function Search() {
	return (
		<div className="giphy-search">

			<input
  onChange={(event) => {
					storeApp.searchValue = event.target.value;
				}}
  placeholder="Поиск..."
			/>

			<span
  className="giphy-search-icon"
  onClick={() => {
					search(storeApp.searchValue, async () => {
						storeApp.isLoad = true;
						await loadGif(storeApp.searchValue);
						storeApp.isLoad = false;
					});
				}}
			/>
		</div>
	);
}

export default Search;
