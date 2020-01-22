Pascals Triangle

Given a number `n`, Compute Pascal's triangle up to the given number of rows.

In Pascal's Triangle each number is computed by adding the numbers to the right and left of the current position in the previous row.

Example Pascal's Triangle

    		1
       1 1
      1 2 1
     1 3 3 1
    1 4 6 4 1
    # . . . etc

### Sample test cases

    expect(new Triangle(3).rows).toEqual([[1], [1, 1], [1, 2, 1]]);

    const twentieth = [
    	1,
    	19,
    	171,
    	969,
    	3876,
    	11628,
    	27132,
    	50388,
    	75582,
    	92378,
    	92378,
    	75582,
    	50388,
    	27132,
    	11628,
    	3876,
    	969,
    	171,
    	19,
    	1];
    expect(new Triangle(20).rows[19]).toEqual(twentieth);
