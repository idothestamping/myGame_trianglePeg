checkSolution = [ 
				[0, 10, 20],
				[0, 11, 20],
				[10, 20, 30],
				[10, 21, 32],
				[11, 21, 21],
				[11, 22, 33],
				[20, 21, 22],
				[20, 31, 42],
				[20, 30, 40],
				[21, 31, 41],
				[21, 32, 43],
				[22, 32, 42],
				[22, 33, 44],
				[30, 31, 32],
				[31, 32, 33],
				[40, 41, 42],
				[41, 42, 43],
				[42, 43, 44],
				[20, 10, 0],
				[20, 11, 0],
				[30, 20, 10],
				[32, 21, 10],
				[21, 21, 11],
				[33, 22, 11],
				[22, 21, 20],
				[42, 31, 20],
				[40, 30, 20],
				[41, 31, 21],
				[43, 32, 21],
				[42, 32, 22],
				[44, 33, 22],
				[32, 31, 30],
				[33, 32, 31],
				[42, 41, 40],
				[43, 42, 41],
				[44, 43, 42] ];









// var MoveTable = [];

// /** Row one (positions 0-4), bottom row */
// MoveTable[0] = [{jumpPos:1, landPos:2}, {jumpPos:5, landPos:9}];
// MoveTable[1] = [{jumpPos:2, landPos:3}, {jumpPos:6, landPos:10}];
// MoveTable[2] = [{jumpPos:1, landPos:0}, {jumpPos:3, landPos:4},
//                 {jumpPos:6, landPos:9}, {jumpPos:7, landPos:11}];
// MoveTable[3] = [{jumpPos:2, landPos:1}, {jumpPos:7, landPos:10}];
// MoveTable[4] = [{jumpPos:3, landPos:2}, {jumpPos:8, landPos:11}];

// /** Row two (positions 5-8) */
// MoveTable[5] = [{jumpPos:6, landPos:7}, {jumpPos:9,  landPos:12}];
// MoveTable[6] = [{jumpPos:7, landPos:8}, {jumpPos:10, landPos:13}];
// MoveTable[7] = [{jumpPos:6, landPos:5}, {jumpPos:10, landPos:12}];
// MoveTable[8] = [{jumpPos:7, landPos:6}, {jumpPos:11, landPos:13}];

// /** Row three (positions 9-11) */
// MoveTable[9] =  [{jumpPos:5,  landPos:0},  {jumpPos:6,  landPos:2}, 
//                  {jumpPos:10, landPos:11}, {jumpPos:12, landPos:14}];
// MoveTable[10] = [{jumpPos:6,  landPos:1},  {jumpPos:7,  landPos:3}];
// MoveTable[11] = [{jumpPos:7,  landPos:2},  {jumpPos:8,  landPos:4}, 
//                  {jumpPos:10, landPos:9},  {jumpPos:13, landPos:14}];

// /** Row four (positions 12 and 13) */
// MoveTable[12] = [{jumpPos:9,  landPos:5}, {jumpPos:10, landPos:7}];
// MoveTable[13] = [{jumpPos:10, landPos:6}, {jumpPos:11, landPos:8}];

// /** Row five (position 14), top row */
// MoveTable[14] = [{jumpPos:12, landPos:9}, {jumpPos:13, landPos:11}];