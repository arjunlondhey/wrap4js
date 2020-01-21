[Update Inventory](https://www.notion.so/Update-Inventory-e52343010c5640bab5f717ea06b5eb1a)

Compare and update the inventory stored in a 2D array against a second 2D array of a
fresh delivery. Update the current existing inventory item quantities (in arr1).

If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

### Example test cases

    expect(updateInventory([
      [21, 'Bowling Ball'],
      [2, 'Dirty Sock'],
      [1, 'Hair Pin'],
      [5, 'Microphone'],
    ], [
      [2, 'Hair Pin'],
      [3, 'Half-Eaten Apple'],
      [67, 'Bowling Ball'],
      [7, 'Toothpaste'],
    ]).length).toBe(6);

    expect(updateInventory([
      [21, 'Bowling Ball'],
      [2, 'Dirty Sock'],
      [1, 'Hair Pin'],
      [5, 'Microphone'],
    ], [
      [2, 'Hair Pin'],
      [3, 'Half-Eaten Apple'],
      [67, 'Bowling Ball'],
      [7, 'Toothpaste'],
    ]))
    .toEqual([
      [88, 'Bowling Ball'],
      [2, 'Dirty Sock'],
      [3, 'Hair Pin'],
      [3, 'Half-Eaten Apple'],
      [5, 'Microphone'],
      [7, 'Toothpaste'],
    ]);
