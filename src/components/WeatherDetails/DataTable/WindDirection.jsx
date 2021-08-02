export default function WindDirection({ direction }) {
	const convertToCardinalDirection = (direction) => {
		switch (true) {
			case direction === 0:
				return (direction = 'E')

			case direction === 90:
				return (direction = 'N')

			case direction === 180:
				return (direction = 'W')

			case direction === 270:
				return (direction = 'S')

			case 0 < direction < 90:
				return (direction = 'NE')

			case 90 > direction > 180:
				return (direction = 'NW')

			case 180 > direction > 270:
				return (direction = 'SW')

			case 270 > direction > 360:
				return (direction = 'NW')

			default:
				return (direction = '')
		}
	}
	return <>{convertToCardinalDirection(direction)}</>
}
