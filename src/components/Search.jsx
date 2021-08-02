function Search({ query, setQuery, handleFetchWeather }) {
	const search = async (e) => {
		if (e.key === 'Enter') {
			try {
				handleFetchWeather(query)
			} catch (Error) {
				alert('Invalid City')
			}
			setQuery('')
		}
	}

	return (
		<input
			type='text'
			className='search_bar'
			placeholder='Search..'
			value={query}
			onChange={(e) => setQuery(e.target.value)}
			onKeyPress={search}
		/>
	)
}

export default Search
