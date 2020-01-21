let updateInventory = (inventoryItems, freshDeliveryItems) => {
    let updatedInventoryList = updateInventoryItems([...inventoryItems.concat(freshDeliveryItems)]);
    var finalInventoryList = [];
    Object.keys(updatedInventoryList).forEach((key) => {
        finalInventoryList.push([updatedInventoryList[key], key]);
    });
    return finalInventoryList;

}

let updateInventoryItems = (itemList) => {
    let inventoryList = {};
    itemList.forEach((item) => {
        inventoryList[item[1]] ? inventoryList[item[1]] += item[0] : inventoryList[item[1]] = item[0];
    })
    return Object.keys(inventoryList).sort().reduce((acc, currentIndex) => (acc[currentIndex] = inventoryList[currentIndex], acc), {});
}


module.exports = {
    updateInventory
}