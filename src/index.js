// You should implement your task here.

module.exports = function towelSort(matrix) {
    let arr = "";

    if (matrix === undefined) return [];
    else if (matrix !== undefined) {
        for (let i = 0; i < matrix.length; i++) {
            let matrixLength = matrix[i].length;
            for (let elem = 0; elem < matrixLength; elem++) {
                if (i % 2 === 1) {
                    matrix[i].sort((a, b) => b - a);
                }
            }
            arr += matrix[i] + ", ";
        }
        let result = arr.split(",");
        result = result.slice(0, result.length - 1);
        result = result.map((elem) => +elem);

        return result;
    }
};
