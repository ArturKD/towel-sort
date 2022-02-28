
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];
    if (matrix !== undefined) {
        matrix.forEach((x, i) => {
            if (i === 0) {
                x.forEach((y) => {
                    arr.push(y)
                })
            } else if (i % 2 === 1) {
                x.reverse();
                x.forEach((y) => {
                    arr.push(y)
                })
            } else if (i % 2 === 0) {
                x.forEach((y) => {
                    arr.push(y)
                })
            }

        })
    }
    return arr;
}

