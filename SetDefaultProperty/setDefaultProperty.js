let setDefaultProperty = (inputObject, defaultValue = "defaultValue") => {
    let initObject = {};
    let [key, value] = Object.entries(inputObject)[0];
    Object.defineProperty(initObject, key, {
        value: value,
        writable: false,
        enumerable: true,
        configurable: true,
    });
    const objectHandler = new Proxy(initObject, {
        get: function (initObject, property) {
            return Object.getOwnPropertyDescriptors(initObject)[property] ? initObject[property] : defaultValue;
        }
    })
    return objectHandler;
}
module.exports = { setDefaultProperty };