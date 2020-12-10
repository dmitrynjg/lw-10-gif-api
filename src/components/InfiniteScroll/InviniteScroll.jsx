import React from 'react';
import PropTypes from 'prop-types';
import infiniteScrollHandler from '../../actions/infiniteScroll';
import './InfiniteScroll.css';

function InfiniteScroll({ children, callback }) {
	return (
		<div
  onScroll={(event) => {
				infiniteScrollHandler(event, callback);
			}}
  className="infinite-scroll"
		>
			{children}
		</div>
	);
}
InfiniteScroll.propTypes = {
	children: PropTypes.element.isRequired,
	callback: PropTypes.func.isRequired,
};
export default InfiniteScroll;
