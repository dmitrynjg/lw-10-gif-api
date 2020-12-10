import React from 'react';
import PropTypes from 'prop-types';
import './GiphyListItem.css';

function GiphyListItem({ data }) {
	return (

		<div className="giphy-list-item">

			<img src={data.images.downsized.url} alt="gif" />

			<a href={data.url}>{data.title}</a>
		</div>
	);
}
GiphyListItem.propTypes = {
	data:	PropTypes.objectOf.isRequired,
};
export default GiphyListItem;
