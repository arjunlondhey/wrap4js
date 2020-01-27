const copyObjectsUsingDescriptor = (inputObject) => {
    let returnObject = {};
    for (propertyName of Object.getOwnPropertyNames(inputObject)) {
        let property = Object.getOwnPropertyDescriptor(inputObject, propertyName);
        Object.defineProperty(returnObject, propertyName, {
            value: property.value,
            writable: property.writable,
            enumerable: property.enumerable,
            configurable: property.configurable
        });
    }
    return returnObject;
}
module.exports = { copyObjectsUsingDescriptor };