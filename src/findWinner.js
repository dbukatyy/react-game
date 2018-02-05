function findWinner(squares) {
	const lines = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6]
	];

	let res;

	lines.forEach((line, index) => {
		let [a,b,c] = line;
		if( squares[a] && squares[a] === squares[b] && squares[b] === squares[c] ) {
			// console.log(line);
			res = line;
		} 
	})
	return res;
}

export default findWinner;