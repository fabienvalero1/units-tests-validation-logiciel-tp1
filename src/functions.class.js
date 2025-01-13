const my_alpha_number_t = nbr => `${nbr}`;

const sum = (a, b) => {
    if (typeof a != 'number' || typeof b != 'number' ) {
        return 0;
    }

    return a + b;
};

const my_size_alpha_t = (str = '') => {
    let count = 0;

    if (typeof str !== 'string') {
        return count;
    }

    while (!!str[count]) {
        count++;
    }

    return count;
};

const my_display_alpha_t = () => 'abcdefghijklmnopqrstuvwxyz';

const my_array_alpha_t = (str) => {
    const result = [];

    for (let i = 0; i < my_size_alpha_t(str); i += 1) {
        result[i] = str[i];
    }

    return result;
};

const my_is_posi_neg_t = (nbr) => {
    if (nbr <= 0) {
        return 'NEGATIVE';
    }
    return 'POSITIF';
};

const fibo = (n) => {
    if (n <= 0) {
        return 0;
    }

    if (n === 1 || n === 2) {
        return 1;
    }

    return fibo(n - 1) + fibo(n - 2);
};

const my_display_alpha_reverse_t = () => {
    const alpha = my_display_alpha_t();
    let reverseAlpha = '';

    for (let i = my_size_alpha_t(alpha); i > 0; i -= 1) {
        reverseAlpha += alpha[i - 1];
    }

    return reverseAlpha;
};

const my_length_array_t = (arr) => {
    let i = 0;

    while (!!arr[i]) {
        i += 1;
    }

    return i;
};

const my_display_unicode_t = (arr) => {
    const results = [];

    for (let i = 0; i < arr.length; i += 1) {
        const decimal = arr[i];

        if ((decimal >= 65 && decimal <= 99) ||
            (decimal >= 97 && decimal <= 122) ||
            (decimal >= 48 && decimal <= 57) ||
            decimal === 32) {
            results[i] = String.fromCharCode(arr[i]);
        }
    }

    return results.join('');
};

function quickSort(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

function tspBrutForce(distances) {
    const villes = Object.keys(distances);
    const permutations = permuter(villes);
    let minDistance = Infinity;
    let meilleurePermutation = [];

    permutations.forEach((chemin) => {
        let distanceTotale = 0;

        for (let i = 0; i < chemin.length - 1; i++) {
            distanceTotale += distances[chemin[i]][chemin[i + 1]];
        }
        distanceTotale += distances[chemin[chemin.length - 1]][chemin[0]]; // Retour à la ville de départ

        if (distanceTotale < minDistance) {
            minDistance = distanceTotale;
            meilleurePermutation = chemin;
        }
    });

    return { minDistance, meilleurePermutation };
}

function permuter(arr) {
    if (arr.length === 0) return [[]];

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const reste = arr.slice(0, i).concat(arr.slice(i + 1));
        const permut = permuter(reste);

        for (let j = 0; j < permut.length; j++) {
            result.push([arr[i], ...permut[j]]);
        }
    }

    return result;
}

function resoudreSudoku(grille) {
    for (let ligne = 0; ligne < 9; ligne++) {
        for (let col = 0; col < 9; col++) {
            if (grille[ligne][col] === 0) {
                for (let num = 1; num <= 9; num++) {
                    if (estValide(grille, ligne, col, num)) {
                        grille[ligne][col] = num;
                        if (resoudreSudoku(grille)) {
                            return true;
                        }
                        grille[ligne][col] = 0; // Backtrack
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function estValide(grille, ligne, col, num) {
    for (let i = 0; i < 9; i++) {
        if (grille[ligne][i] === num || grille[i][col] === num) return false;
    }

    const startRow = Math.floor(ligne / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;

    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            if (grille[i][j] === num) return false;
        }
    }

    return true;
}

module.exports = {
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
    resoudreSudoku,
};
