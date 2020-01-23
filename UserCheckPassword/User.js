function User(username, password) {
    this.username = username;
    this.password = password;
}


User.prototype.checkPassword = function checkPassword(password) {
    return typeof password === 'string' && this.password === password ? true : false;
};

module.exports = { User }