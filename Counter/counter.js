const counter = () => {
    let i = 0;
    return () => { return ++i };
}
module.exports = {
    counter
}