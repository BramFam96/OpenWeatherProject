function Search({ query, setQuery, search }) {
	return (
		<input
			type='text'
			className='search'
			placeholder='Search..'
			value={query}
			onChange={(e) => setQuery(e.target.value)}
			onKeyPress={search}
		/>
	);
}

export default Search;
