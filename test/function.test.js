// Import the functions to be tested
const {
    my_alpha_number_t,
    sum,
    my_size_alpha_t,
    my_display_alpha_t,
    my_array_alpha_t,
    my_is_posi_neg_t,
    fibo,
    my_display_alpha_reverse_t,
    my_length_array_t,
    my_display_unicode_t,
    quickSort,
    tspBrutForce,
    permuter,
    resoudreSudoku
} = require('../src/functions.class');

describe('my_alpha_number_t', () => {
    it('should return a string representation of the number', () => {
        expect(my_alpha_number_t(123)).toBe('123');
        expect(my_alpha_number_t(0)).toBe('0');
        expect(my_alpha_number_t(-1)).toBe('-1');
    });
});

describe('sum', () => {
    it('should return the sum of two numbers', () => {
        expect(sum(1, 2)).toBe(3);
        expect(sum(-1, -1)).toBe(-2);
        expect(sum(1.5, 2.5)).toBe(4);
    });

    it('should return 0 if one of the arguments is not a number', () => {
        expect(sum(1, 'a')).toBe(0);
        expect(sum('1', 2)).toBe(0);
        expect(sum('a', 'b')).toBe(0);
    });
});

describe('my_size_alpha_t', () => {
    it('should return the length of a string', () => {
        expect(my_size_alpha_t('abc')).toBe(3);
        expect(my_size_alpha_t('')).toBe(0);
        expect(my_size_alpha_t('a')).toBe(1);
    });

    it('should return 0 for non-string input', () => {
        expect(my_size_alpha_t(123)).toBe(0);
        expect(my_size_alpha_t(null)).toBe(0);
        expect(my_size_alpha_t(undefined)).toBe(0);
    });
});

describe('my_display_alpha_t', () => {
    it('should return the alphabet string', () => {
        expect(my_display_alpha_t()).toBe('abcdefghijklmnopqrstuvwxyz');
    });
});

describe('my_array_alpha_t', () => {
    it('should return an array of characters from the input string', () => {
        expect(my_array_alpha_t('abc')).toEqual(['a', 'b', 'c']);
        expect(my_array_alpha_t('')).toEqual([]);
    });

    it('should return an empty array for non-string input', () => {
        expect(my_array_alpha_t(123)).toEqual([]);
        expect(my_array_alpha_t(null)).toEqual([]);
    });
});

describe('my_is_posi_neg_t', () => {
    it('should return "NEGATIVE" for non-positive numbers', () => {
        expect(my_is_posi_neg_t(-1)).toBe('NEGATIVE');
        expect(my_is_posi_neg_t(0)).toBe('NEGATIVE');
    });

    it('should return "POSITIF" for positive numbers', () => {
        expect(my_is_posi_neg_t(1)).toBe('POSITIF');
    });
});

describe('fibo', () => {
    it('should return the correct Fibonacci number', () => {
        expect(fibo(0)).toBe(0);
        expect(fibo(1)).toBe(1);
        expect(fibo(2)).toBe(1);
        expect(fibo(3)).toBe(2);
        expect(fibo(4)).toBe(3);
        expect(fibo(5)).toBe(5);
    });
});

describe('my_display_alpha_reverse_t', () => {
    it('should return the alphabet in reverse order', () => {
        expect(my_display_alpha_reverse_t()).toBe('zyxwvutsrqponmlkjihgfedcba');
    });
});

describe('my_length_array_t', () => {
    it('should return the length of an array', () => {
        expect(my_length_array_t([1, 2, 3])).toBe(3);
        expect(my_length_array_t([])).toBe(0);
    });
});

describe('my_display_unicode_t', () => {
    it('should return a string of valid characters from an array of Unicode values', () => {
        expect(my_display_unicode_t([65, 66, 67, 32, 48, 49])).toBe('ABC 01');
        expect(my_display_unicode_t([100, 121, 122])).toBe('dyz');
    });

    it('should return an empty string for an array with invalid Unicode values', () => {
        expect(my_display_unicode_t([1234])).toBe('');
    });
});

describe('quickSort', () => {
    it('should sort an array of numbers', () => {
        expect(quickSort([3, 1, 4, 1, 5, 9])).toEqual([1, 1, 3, 4, 5, 9]);
    });

    it('should return an empty array for an empty array', () => {
        expect(quickSort([])).toEqual([]);
    });
});

describe('tspBrutForce', () => {
    it('should return the shortest path and distance for the traveling salesman problem', () => {
        const distances = {
            A: { B: 10, C: 15, D: 20 },
            B: { A: 10, C: 35, D: 25 },
            C: { A: 15, B: 35, D: 30 },
            D: { A: 20, B: 25, C: 30 },
        };

        const result = tspBrutForce(distances);
        expect(result.minDistance).toBe(80); // Example expected value, adjust according to the logic
        expect(result.meilleurePermutation).toEqual(['A', 'B', 'D', 'C']);
    });
});

describe('permuter', () => {
    test('permuter with an empty array', () => {
        expect(permuter([])).toEqual([[]]);  // An empty array should return a single empty array
    });

    test('permuter with a single element array', () => {
        expect(permuter([1])).toEqual([[1]]);  // Only one permutation possible: the array itself
    });

    test('permuter with two elements array', () => {
        expect(permuter([1, 2])).toEqual([
            [1, 2],
            [2, 1]
        ]);  // The two elements should be permuted in two ways
    });

    test('permuter with three elements array', () => {
        expect(permuter([1, 2, 3])).toEqual([
            [1, 2, 3],
            [1, 3, 2],
            [2, 1, 3],
            [2, 3, 1],
            [3, 1, 2],
            [3, 2, 1]
        ]);  // All possible permutations of [1, 2, 3]
    });
});

describe('resoudreSudoku', () => {
    test('solving a valid Sudoku puzzle', () => {
        const grid = [
            [5, 3, 0, 0, 7, 0, 0, 0, 0],
            [6, 0, 0, 1, 9, 5, 0, 0, 0],
            [0, 9, 8, 0, 0, 0, 0, 6, 0],
            [8, 0, 0, 0, 6, 0, 0, 0, 3],
            [4, 0, 0, 8, 0, 3, 0, 0, 1],
            [7, 0, 0, 0, 2, 0, 0, 0, 6],
            [0, 6, 0, 0, 0, 0, 2, 8, 0],
            [0, 0, 0, 4, 1, 9, 0, 0, 5],
            [0, 0, 0, 0, 8, 0, 0, 7, 9]
        ];

        const solvedGrid = [
            [5, 3, 4, 6, 7, 8, 9, 1, 2],
            [6, 7, 2, 1, 9, 5, 3, 4, 8],
            [1, 9, 8, 3, 4, 2, 5, 6, 7],
            [8, 5, 9, 7, 6, 1, 4, 2, 3],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 6, 1, 5, 3, 7, 2, 8, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 4, 5, 2, 8, 6, 1, 7, 9]
        ];

        expect(resoudreSudoku(grid)).toBe(true);  // It should return true when the Sudoku puzzle is solved
        expect(grid).toEqual(solvedGrid);  // The grid should be equal to the solved grid
    });

    test('solving a Sudoku puzzle with no solution', () => {
        const grid = [
            [5, 3, 0, 0, 7, 0, 0, 0, 0],
            [6, 0, 0, 1, 9, 5, 0, 0, 0],
            [0, 9, 8, 0, 0, 0, 0, 6, 0],
            [8, 0, 0, 0, 6, 0, 0, 0, 3],
            [4, 0, 0, 8, 0, 3, 0, 0, 1],
            [7, 0, 0, 0, 2, 0, 0, 0, 6],
            [0, 6, 0, 0, 0, 0, 2, 8, 0],
            [0, 0, 0, 4, 1, 9, 0, 0, 5],
            [0, 0, 0, 0, 8, 0, 0, 7, 9]
        ];

        grid[0][0] = 1; // Change the puzzle to an invalid state (no solution)

        expect(resoudreSudoku(grid)).toBe(false);  // Should return false as the puzzle has no solution
    });
});
