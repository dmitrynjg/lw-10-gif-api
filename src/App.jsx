import { view } from '@risingstack/react-easy-state';
import React, { useEffect } from 'react';
import GiphyList from './components/GiphyList/GiphyList';
import Search from './components/Search/Search';
import storeApp from './store';
import './App.css';
import InfiniteScroll from './components/InfiniteScroll/InviniteScroll';
import GiphyListItem from './components/GiphyListItem/GiphyListItem';
import loadGif from './actions/giphyList';

// console.log(process.env.REACT_APP_API_KEY);
function App() {
	useEffect(() => {
		loadGif('development');
	}, []);
	return (
		<div className="wrap">
			<Search />
			<InfiniteScroll
  callback={
					 async () => {
						await loadGif(storeApp.searchValue);
					}
				}
			>
				{!storeApp.isLoad ? (
					<GiphyList>
						<>
							{storeApp.gifList.map((column, index) => (
								<div className="giphy-column" key={index}>
									{column.map((gif) => (
										<GiphyListItem data={gif} key={gif.id} />
									))}
								</div>
							))}
						</>
					</GiphyList>
				) : (
					<div>Загрузка...</div>
				)}
			</InfiniteScroll>
		</div>
	);
}

export default view(App);
