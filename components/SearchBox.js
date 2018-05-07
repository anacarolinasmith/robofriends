import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='pa5'>
		<input 
			className='pa3 ba b--pink bg-lighest-blue'
			type='search' 
			placeholder='Search Robots' 
			onChange={searchChange}
		/>
		</div>
	);
}

export default SearchBox;