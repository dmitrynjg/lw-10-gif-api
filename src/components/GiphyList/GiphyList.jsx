import React from 'react';
import PropTypes from 'prop-types';
import './GiphyList.css';

function GiphyList({ children }) {
	return (
		<div className="giphy-list">
			{children}
		</div>
	);
}

GiphyList.propTypes = {
	children: PropTypes.element.isRequired,
};
export default GiphyList;
