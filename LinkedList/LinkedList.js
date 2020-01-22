
class LinkedListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next ? next : null;
    }
    toString(cb) {
        return cb ? cb({ value: this.value.value, key: this.value.key }) : this.value.toString();
    }
}
module.exports = { LinkedListNode }
