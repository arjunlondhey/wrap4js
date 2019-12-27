function Triangle(number) {
    this.rows = [];
    for (let currentRow = 0; currentRow < number; currentRow++) {
        this.rows[currentRow] = [];
        for (let currentCol = 0; currentCol < currentRow + 1; currentCol++) {
            if (currentCol === 0 || currentCol === currentRow) {
                this.rows[currentRow][currentCol] = 1;
            } else {
                this.rows[currentRow][currentCol] = this.rows[currentRow - 1][currentCol - 1] + this.rows[currentRow - 1][currentCol];
            }
        }
    }
}

module.exports = {
    Triangle
}