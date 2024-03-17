
class PFCipher {
	constructor(keyword) {
		let arr = [];
		arr.length = 26; arr.fill([ -1, -1 ]);

		let grid = [
			[ 0, 0, 0, 0, 0 ],
			[ 0, 0, 0, 0, 0 ],
			[ 0, 0, 0, 0, 0 ],
			[ 0, 0, 0, 0, 0 ],
			[ 0, 0, 0, 0, 0 ]
		];

		let compArr = (arr1, arr2) => {
			return (
				arr1.length === arr2.length &&
				arr1.every((val, ix) => val === arr2[ix])
			)
		}
		
		keyword = keyword.toUpperCase();
		let i = 0, j = 0, k;

		for(const chr of keyword) {
			k = chr.charCodeAt(0) - 65;

			if(compArr(arr[k], [-1, -1])) {
				arr[k] = [ i, j ];
				grid[i][j] = chr;

				if(k === 8) arr[9] = arr[8];
				else if(k === 9) {
					grid[i][j] = 'I';
					arr[8] = arr[9];
				}

				j = (j + 1)%5;
				if(j === 0) i++;
			}
		}
		
		for(k = 0; k < 26; k++) {
			if(compArr(arr[k], [-1, -1])) {
				arr[k] = [ i, j ];
				grid[i][j] = String.fromCharCode(65 + k);

				if(k === 8) arr[9] = arr[8];
				else if(k === 9) {
					arr[8] = arr[9];
					grid[i][j] = 'I';
				}

				j = (j + 1)%5;
				if(j === 0) i++;
			}
		}

		this.letters = arr;
		this.grid = grid;
	}
	
	enCords(text) {
		if(text.length < 2) {
			return {
				inp: [], out: [],
				text: ''
			}
		}

        text = text.toUpperCase();
		const [ x1, y1 ] = this.letters[text.charCodeAt(0)-65];
		const [ x2, y2 ] = this.letters[text.charCodeAt(1)-65];
		
		let out;
		if(x1 === x2)
			out = [ [ x1, (y1 + 1)%5 ], [ x2, (y2 + 1)%5 ] ];
		else if(y1 === y2)
			out = [ [ (x1 + 1)%5, y1 ], [ (x2 + 1)%5, y2 ] ];
		else
			out = [ [ x1, y2 ], [ x2, y1 ] ];
	
		return {
			inp: [ [ x1, y1 ], [ x2, y2 ] ],
			out,
			text: this.grid[out[0][0]][out[0][1]] + this.grid[out[1][0]][out[1][1]]
		}
	}
	
	deCords(text) {
		const [ x1, y1 ] = this.letters[text.charCodeAt(0)-65];
		const [ x2, y2 ] = this.letters[text.charCodeAt(1)-65];
		
		let out;
		if(x1 === x2)
			out = [ [ x1, (y1 === 0)?(4):(y1 - 1) ], [ x2, (y2 === 0)?(4):(y2 - 1) ] ];
		else if(y1 === y2)
			out = [ [ (x1 === 0)?(4):(x1 - 1), y1 ], [ (x2 === 0)?(4):(x2 - 1), y2 ] ];
		else
			out = [ [ x1, y2 ], [ x2, y1 ] ];

		return {
			inp: [ [ x1, y1 ], [ x2, y2 ] ],
			out,
			text: this.grid[out[0][0]][out[0][1]] + this.grid[out[1][0]][out[1][1]]
		}
	}
}

export default PFCipher;

// let cipher = new PFCipher("test");
// console.log(cipher.grid);

// let text = "MU";
// console.log(text, cipher.enCords(text));

// text = "SX";
// console.log(text, cipher.deCords(text));
